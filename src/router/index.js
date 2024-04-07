import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import Scene from '../pages/Scene.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:rid',
      name: 'movie',
      component: Movie
    },
    {
      path: '/scene',
      name: 'scene',
      component: Scene
    },
  ]
})

export default router
