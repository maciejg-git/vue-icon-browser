<template>
  <div class="flex items-center">
    <template v-for="vendor in store.vendors" :key="vendor">
      <div
        class="px-1 mx-0.5"
        :class="{
          'border-b-2 border-purple-500 dark:border-purple-500':
            store[vendor].active && !store[vendor].loading,
        }"
      >
        <v-button name="button-link" @click="toggleVendor(vendor)">
          <v-spinner
            v-if="store[vendor].loading"
            type="svg"
            style-spinner="secondary small"
          />
          <v-icon
            v-if="!store[vendor].loading"
            :name="icons[vendor]"
            class="h-7 w-7 text-purple-500 dark:text-purple-500"
            :class="{ 'opacity-40': !store[vendor].active }"
          ></v-icon>
        </v-button>
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from "../composition/useStore";

export default {
  setup() {
    let store = useStore();

    let icons = {
      bootstrap: "b-bootstrap-fill",
      mdi: "mdi-material-design",
      fontawesome: "fa-font-awesome-flag-brand",
    };

    let toggleVendor = (vendor) => {
      if (!store[vendor].active) store[vendor].loading = true;
      store[vendor].active = !store[vendor].active;
    };

    return {
      store,
      toggleVendor,
      icons,
    };
  },
};
</script>
