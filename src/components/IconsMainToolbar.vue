<template>
  <div class="flex justify-end justify-items-end">
    <!-- icon size -->

    <div class="flex items-center">
      <template v-for="b in buttons.size" :key="b.option">
        <v-button
          name="button-link"
          @click="handleToolbarClick(b.option)"
          v-tooltip.bottom.oY6="b.tooltip"
        >
          <v-icon
            :name="b.icon"
            class="h-7 w-7 mx-2 dark:text-neutral-400"
            :class="{ 'opacity-20': store.size !== b.option }"
          ></v-icon>
        </v-button>
      </template>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <v-button
        name="button-link"
        @click="handleToolbarClick('settings')"
        v-tooltip.bottom.oY6="'Settings'"
      >
        <v-icon
          :name="BGear"
          class="h-7 w-7 mx-2 dark:text-neutral-400"
          :class="{ 'opacity-20': store.sidepanelState !== 'settings' }"
        ></v-icon>
      </v-button>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
    <template v-for="vendor in store.vendors" :key="vendor">
      <div class="flex items-center px-1 mx-0.5">
        <v-button
          name="button-link"
          @click="handleToggleVendor(vendor)"
          v-tooltip.bottom.oY15="store[vendor].name"
        >
          <v-spinner
            v-if="store[vendor].loading"
            type="svg"
            style-spinner="secondary small"
          />
          <v-icon
            v-if="!store[vendor].loading"
            :name="icons[vendor]"
            class="h-7 w-7 text-purple-500 dark:text-purple-500"
            :class="{ 'opacity-30': !store[vendor].active }"
          ></v-icon>
        </v-button>
      </div>
    </template>
    </div>
  </div>
</template>

<script>
import { useStore } from "../composition/useStore";
import { BMoon, BGear } from "../icons/dist-bootstrap";
import { MdiSizeS, MdiSizeM, MdiSizeL } from "../icons/dist-mdi";
import IconsVendors from "./IconsVendors.vue"

export default {
  components: {
    IconsVendors,
  },
  setup() {
    let store = useStore();

    let icons = {
      bootstrap: "b-bootstrap-fill",
      mdi: "mdi-material-design",
      fontawesome: "fa-font-awesome-brand",
    };

    let buttons = {
      size: {
        sm: {
          option: "sm",
          icon: MdiSizeS,
          tooltip: "Small icons",
        },
        md: {
          option: "md",
          icon: MdiSizeM,
          tooltip: "Medium icons",
        },
        lg: {
          option: "lg",
          icon: MdiSizeL,
          tooltip: "Large icons",
        },
      },
    };

    let handleToolbarClick = (option) => {
      if (option === "sm") store.size = "sm";
      else if (option === "md") store.size = "md";
      else if (option === "lg") store.size = "lg";
      else if (option === "settings") {
        store.isSidepanelActive = !store.isSidepanelActive;
      }
    };

    let handleToggleVendor = (vendor) => store.toggleVendor(vendor);

    return {
      store,
      buttons,
      handleToolbarClick,
      handleToggleVendor,
      icons,
      BMoon,
      BGear,
      MdiSizeS,
      MdiSizeM,
      MdiSizeL,
    };
  },
};
</script>
