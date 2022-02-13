import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
 state: () => {
    return {
      settings: {
        vendorPrefix: true,
        originalNames: false,
        kebabCase: false,
      },
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
      currentIconDemo: null,
    }
  },
  getters: {
    isAnyVendorLoaded: (state) => {
      return state.bootstrap.active || state.mdi.active || state.fontawesome.active
    }
  }
})
