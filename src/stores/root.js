import { defineStore } from 'pinia'
import axios from 'axios'
import {MOVIES_URL} from '../constants'


export const useRootStore = defineStore({
  id: 'api',
  state: () => ({
    data: [],
    movie: {},
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
    async getOneMovie(id) {
      try {
        const response = await axios.get(`${MOVIES_URL}/${id}`);
        this.movie = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});



