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
    isAnyVendorLoaded: (state) => {
      return state.bootstrap.active || state.mdi.active || state.fontawesome.active
    }
  }
})
