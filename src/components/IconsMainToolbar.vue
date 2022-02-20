<template>
  <div
    v-if="store.isAnyVendorLoaded"
    class="flex justify-end justify-items-end"
  >
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
      <v-button
        name="button-link"
        @click="handleToolbarClick('dark')"
        v-tooltip.bottom.oY6="'Dark mode'"
      >
        <v-icon
          :name="BMoon"
          class="h-7 w-7 mx-2 dark:text-neutral-400"
          :class="{ 'opacity-20': !store.dark }"
        ></v-icon>
      </v-button>
    </div>
  </div>
</template>

<script>
import { useStore } from "../composition/useStore";
import {
  BMoon,
  BGear,
} from "../icons/dist-bootstrap";
import { MdiSizeS, MdiSizeM, MdiSizeL } from "../icons/dist-mdi";

export default {
  setup() {
    let store = useStore();

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
      else if (option === "dark") {
        store.dark = !store.dark
        if (store.dark) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      }
      else if (option === "settings") {
        store.isSidepanelActive = !store.isSidepanelActive;
      }
    };

    return {
      store,
      buttons,
      handleToolbarClick,
      BMoon,
      BGear,
      MdiSizeS,
      MdiSizeM,
      MdiSizeL,
    };
  },
};
</script>
