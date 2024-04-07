import { defineStore } from 'pinia'
import axios from 'axios'
import {MOVIES_URL} from '../constants'


export const useRootStore = defineStore({
  id: 'api',
  state: () => ({
    data: [],
  }),
  actions: {
    async getMovies() {
      try {
        const response = await axios.get(MOVIES_URL);
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});


// export const useRootStore = defineStore('root', 
// {
//   state: () => ({
//     movies: []
//   }),
//   actions: {
//     async getMovies() {
//       const data = await axios.get(MOVIES_URL)
//       this.movies = data?.data
//     }
//   }
// })


