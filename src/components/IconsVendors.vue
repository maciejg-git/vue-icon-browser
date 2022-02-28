<template>
  <div
    class="flex items-center"
  >
    <template v-for="vendor in store.vendors" :key="vendor">
      <div class="px-2 py-0.5 mx-0.5"
           :class="{'border-b-2 border-gray-200 dark:border-purple-500': store[vendor].active && !store[vendor].loading}">
        <v-button
          name="button-link" 
          @click="toggleVendor(vendor)"
        >
          <v-spinner v-if="store[vendor].loading" style-spinner="secondary small" />
          <v-icon
            v-if="!store[vendor].loading"
            :name="icons[vendor]"
            class="h-7 w-7 text-gray-200 dark:text-purple-500"
            :class="{ 'opacity-40': !store[vendor].active }"
          ></v-icon>
        </v-button>
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from "../composition/useStore";

import { BBootstrapFill, BCheckLg } from "../icons/dist-bootstrap";
import { MdiMaterialDesign } from "../icons/dist-mdi";
import { FaFontAwesomeFlagBrand } from "../icons/dist-fontawesome";

export default {
  setup() {
    let store = useStore();

    let icons = {
      bootstrap: BBootstrapFill, 
      mdi: MdiMaterialDesign, 
      fontawesome: FaFontAwesomeFlagBrand,
    }

    let toggleVendor = (vendor) => {
      if (!store[vendor].active) store[vendor].loading = true;
      store[vendor].active = !store[vendor].active;
    };

    return {
      store,
      toggleVendor,
      icons,
      BCheckLg
    };
  },
};
</script>
