<script>
export default {
  props: {
    takenSeats: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rows: 5, // Number of rows in the cinema
      columns: 10, // Number of columns in the cinema
      selectedSeats: [], // Array to store selected seats (format: [{ row: number, column: number }])
      seatPrice: 50, // Price per seat
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
    isSeatTaken(row, column) {
      return this.takenSeats.some(seat => seat.row === row && seat.column === column);
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
      <div class="screen">111</div>
      <table>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(seat, colIndex) in columns" :key="colIndex">
            <button
              :class="{ selected: isSeatSelected(rowIndex, colIndex), taken: isSeatTaken(rowIndex, colIndex) }"
              @click="toggleSeat(rowIndex, colIndex)"
              :disabled="isSeatTaken(rowIndex, colIndex)"
            >
              {{ rowIndex + 1 }} - {{ String.fromCharCode(65 + colIndex) }}
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
        <td><button @click="unselectSeat(index)">Unselect</button></td>
      </tr>
      <tr v-if="selectedSeats.length !== 0">
        <td colspan="3">
          Unselect All 
        </td>
        <td><button @click="unselectAllSeats">Unselect All</button></td>
      </tr>
      <tr v-if="selectedSeats.length !== 0">
        <td colspan="2">
          Total Price:
        </td>
        <td colspan="2">${{ totalPrice }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="selectedSeats.length !== 0"><button @click="unselectAllSeats">Next</button></div>
</div>
</div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.selected 
  background-color: $sceneButton

.taken 
  background-color: $takenSit
  cursor: not-allowed

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

.chosen-seats table
  border-collapse: collapse
  width: 100%

.chosen-seats th,
.chosen-seats td
  border-bottom: 1px solid $background
  padding: 8px
  text-align: left

table 
  margin: 50px
  border-spacing: 10px
</style>