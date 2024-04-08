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
    <RouterLink :to="`/scene/${dataObject.id}`">
      <img class="img" :src="dataObject.url" alt="Image">
    </RouterLink>
    <!-- <div :style="`background-image: url(${dataObject.url})`" class="img"></div> -->
    <div class="main">
        <p class="title">{{ dataObject.title }}</p>
        <p class="date">{{ dataObject.date }}</p>
        <p class="time">CINETECH+ 2D <RouterLink :to="`/scene/${dataObject.id}`"><span v-for="(item, index) in dataObject.dataArray" :key="index">{{ item }}</span></RouterLink></p>
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
.main
  display: flax
  flax-diraction: column
  justify-content: start
  padding: 0px 30px
.img
    height: 100%
    width: 100%
.title
    color: $title
    font-size: 28px
.date,
.time,
.title
  margin: 0
  padding: 0
span
    padding: 10px 20px
    margin: 10px
    background-color: $title
p 
    padding: 20px 

</style>