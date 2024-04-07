<script>
import AppLayout from "../components/AppLayout.vue";
import {useRootStore} from '../stores/root'

export default {
  components: {
    AppLayout,
  },
  setup() {
    const apiStore = useRootStore();
    apiStore.getMovies(); // Fetch data when the parent component is mounted
    console.log("home", apiStore)
    return { apiStore };
  },
};
</script>

<template>
    <div>
        <AppLayout v-for="(item, index) in apiStore.data" :key="index" :dataObject="item"/>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>