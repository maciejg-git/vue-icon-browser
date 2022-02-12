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
      dark: false,
      sidepanelState: "icons",
      settings: {
        vendorPrefix: true,
        originalNames: false,
        kebabCase: false,
      }
    }
  },
  getters: {
    isAnyVendorLoaded: (state) => {
      return state.bootstrap.active || state.mdi.active || state.fontawesome.active
    }
  }
})
