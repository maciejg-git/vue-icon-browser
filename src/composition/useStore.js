import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
 state: () => {
    return {
      bootstrap: {
        active: true,
        loading: false,
      },
      mdi: {
        active: false,
        loading: false,
      },
      fontawesome: {
        active: false,
        loading: false,
      },
      size: null,
      view: null,
      filter: "",
    }
  },
  getters: {
    getCounter: (state) => state.counter,
  }
})
