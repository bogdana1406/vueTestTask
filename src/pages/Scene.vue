<script>
import Screen from "../components/Screen.vue"
import {useRootStore} from '../stores/root'
import { useRoute } from 'vue-router'

export default {
  components: {
    Screen,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const apiStore = useRootStore();
    apiStore.getOneMovie(id);
    return { apiStore };
  },
};
</script>

<template>
    <!-- <h1>{{ apiStore.movie }}</h1> -->
<Screen :movie="apiStore.movie"/>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>