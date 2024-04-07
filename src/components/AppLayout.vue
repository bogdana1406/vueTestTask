<script>
export default {
  props: {
    dataObject: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
<div class="root">
    <img :src="dataObject.url" alt="Image">
    <!-- <div :style="`background-image: url(${dataObject.url})`" class="img"></div> -->
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
    width: 20%
    background-repeat: no-repeat
    background-size: cover
span
    padding: 10px
    margin: 10px
    background-color: $screanColor
p 
    padding: 20px 

</style>