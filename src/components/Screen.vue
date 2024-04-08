<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert('Your purchase is successful', 'Сongratulations', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rows: 5,
      columns: 10,
      selectedSeats: [],
      seatPrice: 50,
    };
  },
  computed: {
    totalPrice() {
      return this.selectedSeats.length * this.seatPrice;
    },
  },
  methods: {
    toggleSeat(row, column) {
      const index = this.selectedSeats.findIndex(seat => seat.row === row && seat.column === column);
      if (index === -1) {
        this.selectedSeats.push({ row, column });
      } else {
        this.selectedSeats.splice(index, 1);
      }
    },
    unselectSeat(index) {
      this.selectedSeats.splice(index, 1);
    },
    isSeatSelected(row, column) {
      return this.selectedSeats.some(seat => seat.row === row && seat.column === column);
    },
    unselectAllSeats() {
      this.selectedSeats = [];
    },
  },
};
</script>

<template>
  <div class="cinema-seats">
    <div class="cinema">
      <div class="screen">{{ movie.title }}</div>
      <table>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(seat, colIndex) in columns" :key="colIndex">
            <button
              class="seat-btn"
              :class="{selected: isSeatSelected(rowIndex, colIndex) }"
              @click="toggleSeat(rowIndex, colIndex)"
            >
              <el-icon
              :size="25"
              :class="{hidden: !isSeatSelected(rowIndex, colIndex) }"
              ><User /></el-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="chosen-seats">
    <h2>Chosen Seats</h2>
    <table class="chosen-table">
      <thead>
        <tr>
        <th>Row</th>
        <th>Column</th>
        <th colspan="2">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="selectedSeats.length === 0">
        <td colspan="3">No seats chosen yet</td>
      </tr>
      <tr v-for="(seat, index) in selectedSeats" :key="index">
        <td>{{ seat.row + 1 }}</td>
        <td>{{ String.fromCharCode(65 + seat.column) }}</td>
        <td>{{ seatPrice }}</td>
        <td><button class="unselected-btn" @click="unselectSeat(index)">X</button></td>
      </tr>
      <tr v-if="selectedSeats.length !== 0">
        <td colspan="3">
          Unselect All 
        </td>
        <td><button class="unselected-btn" @click="unselectAllSeats">X</button></td>
      </tr>
      <tr v-if="selectedSeats.length !== 0">
        <td colspan="2">
          Total Price:
        </td>
        <td colspan="2">${{ totalPrice }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="selectedSeats.length !== 0">
      <el-button plain @click="open">Next</el-button>
    </div>
</div>
</div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.seat-btn
  background-color: $sceneButton
  width: 50px
  height: 50px

.seat-btn.selected 
  background-color: $takenSit
  color: $buttonText

.cinema-seats
  margin: 50px
  display: flex
  text-align: center
  justify-content: space-around

.cinema
  display: flex
  flex-direction: column
  text-align: center
  justify-content: space-around
  
.screen
  width: 100%
  height: 50px
  background: $sceneButton
  transform: perspective(10px) rotateX(-1deg)
  display: flax
  flax-diraction: column
  text-align: center
  ustify-content: center

.chosen-seats table
  border-collapse: collapse
  width: 100%

.chosen-seats
  display: flex
  flex-direction: column
  text-align: center
  justify-content: center

.chosen-seats th,
.chosen-seats td
  border-bottom: 1px solid $background
  padding: 8px
  text-align: left

.unselected-btn
  border: 1px solid $background
  border-radius: 50%
  width: 30px
  height: 30px

.el-button
  border: 1px solid $buttonBorder
  border-radius: 30px
  background-color: $buyButton
  width: 400px
  height: 80px
  font-size: 25px

.el-icon.hidden
  display: none

table 
  margin: 50px 0px
  border-spacing: 10px

</style>