import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
 state: () => {
    return {
      settings: {
        vendorPrefix: true,
        originalNames: false,
        kebabCase: false,
      },
      vendors: ["bootstrap", "mdi", "fontawesome"],
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
      filter: "",
      dark: false,
      currentIconDemo: null,
      isSidepanelActive: false,
      selectedIcons: [],
    }
  },
  getters: {
    isAnyVendorLoaded: (state) => {
      return state.bootstrap.active || state.mdi.active || state.fontawesome.active
    }
  }
  // toggle sidepanel
})
