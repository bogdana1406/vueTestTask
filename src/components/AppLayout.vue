<!-- <script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {

    }
});
</script> -->
<script>
export default {
  props: {
    // url: {
    //   type: String, // Define the type of the prop
    //   required: true, // Make the prop required if necessary
    // },
    // dataArray: {
    //   type: Array, // Define the type of the prop
    //   required: true, // Make the prop required if necessary
    // },
    // title: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: String,
    //     required: true
    // },
    dataObject: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
<div class="root">
    <!-- <img :src="url" alt="Image"> -->
    <div :style="`background-image: url(${dataObject.url})`" class="img"></div>
    <div class="main">
        <p class="title">{{ dataObject.title }}</p>
        <p class="date">{{ dataObject.date }}</p>
        <p class="time">CINETECH+ 2D <span v-for="(item, index) in dataObject.dataArray" :key="index">{{ item }}</span> </p>
    </div>
</div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    display: flex
    background-color: $background
    padding: 10px
    margin: 10px
.img
    height: 50vh
    width: 10%
    background-repeat: no-repeat
    background-size: cover
span
    padding: 10px
p 
    padding: 20px 

</style>