import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
 state: () => {
    return {
      vendors: ["bootstrap", "mdi", "fontawesome"],
      settings: {
        vendorPrefix: true,
        originalNames: false,
        kebabCase: false,
      },
      size: "sm",
      dark: true,
      bootstrap: {
        active: true,
        loading: false,
        loadedAll: false,
      },
      mdi: {
        active: false,
        loading: false,
        loadedAll: false,
      },
      fontawesome: {
        active: false,
        loading: false,
        loadedAll: false,
      },
      filter: "",
      currentIconDemo: null,
      isSidepanelActive: false,
      selectedIcons: [],
      lastSelectedIcon: {},
      loadedIconsCount: 500,
    }
  },
  getters: {
    isAnyVendorLoaded: (state) => {
      return state.bootstrap.active || state.mdi.active || state.fontawesome.active
    },
  },
  actions: {
    clearSelected() {
      this.selectedIcons.forEach((i) => {
        i.selected.value = false;
      });
      this.selectedIcons = [];
    },
    unselectIcon(icon) {
      let index = this.selectedIcons.findIndex((i) => {
        return icon.$_icon.name === i.$_icon.name;
      });
      this.selectedIcons.splice(index, 1);
      icon.selected.value = false;
      this.lastSelectedIcon = null;
      // if (icon == store.currentIconDemo) store.currentIconDemo = null
    },
    selectIcons(icons) {
      let isArray = Array.isArray(icons);

      if (!isArray && icons.selected.value) {
        this.unselectIcon(icons);
        return;
      }

      if (isArray) {
        icons.forEach((i) => {
          if (!i.selected.value) {
            this.selectedIcons.push(i);
            i.selected.value = true;
          }
        });
        this.lastSelectedIcon = icons[icons.length - 1];
      } else {
        this.selectedIcons.push(icons);
        icons.selected.value = true;
        this.lastSelectedIcon = icons;
        this.currentIconDemo = icons;
      }
    },

    // load icons async component

    loadVendor(vendor) {
      this[vendor].active = true;
      this[vendor].loading = true;
    },
    unloadVendor(vendor) {
      this[vendor].active = false;
    },
    loadVendorComplete(vendor) {
      this[vendor].loading = false;
    },
    toggleVendor(vendor) {
      if (this[vendor].active) this.unloadVendor(vendor)
      else this.loadVendor(vendor)
    },

    // dark mode

    initDarkMode() {
      if (this.dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark"); 
    },
    toggleDarkMode() {
      if (!this.dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark"); 
      this.dark = !this.dark;
    },
  }
})
