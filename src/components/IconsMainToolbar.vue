<template>
        <div
          v-if="store.isAnyVendorLoaded"
          class="flex justify-end justify-items-end"
        >
          <div class="flex items-center">
            <v-button
              name="button-link"
              @click="handleToolbarClick('sm')"
              v-tooltip.bottom.oY5="'Small'"
            >
              <v-icon
                :name="MdiSizeS"
                class="h-9 w-9 mx-2 dark:text-neutral-400"
                :class="{ 'opacity-20': store.size !== 'sm' }"
              ></v-icon>
            </v-button>
            <v-button
              name="button-link"
              @click="handleToolbarClick('md')"
              v-tooltip.bottom.oY5="'Medium'"
            >
              <v-icon
                :name="MdiSizeM"
                class="h-9 w-9 mx-2 dark:text-neutral-400"
                :class="{ 'opacity-20': store.size !== 'md' }"
              ></v-icon>
            </v-button>
            <v-button
              name="button-link"
              @click="handleToolbarClick('lg')"
              v-tooltip.bottom.oY5="'Large'"
            >
              <v-icon
                :name="MdiSizeL"
                class="h-9 w-9 mx-2 dark:text-neutral-400"
                :class="{ 'opacity-20': store.size !== 'lg' }"
              ></v-icon>
            </v-button>
          </div>
          <div class="flex items-center border-l px-2 dark:border-neutral-700">
            <v-button
              name="button-link"
              @click="handleToolbarClick('stacked')"
              v-tooltip.bottom.oY5="'Stacked view'"
            >
              <v-icon
                :name="BLayoutTextSidebarReverse"
                class="h-7 w-7 mx-2 dark:text-neutral-400"
                :class="{ 'opacity-20': store.view !== 'stacked' }"
              ></v-icon>
            </v-button>
            <v-button
              name="button-link"
              @click="handleToolbarClick('columns')"
              v-tooltip.bottom.oY5="'Columns view'"
            >
              <v-icon
                :name="BLayoutThreeColumns"
                class="h-7 w-7 mx-2 dark:text-neutral-400"
                :class="{ 'opacity-20': store.view !== 'columns' }"
              ></v-icon>
            </v-button>
          </div>
          <div class="flex items-center border-l px-2 dark:border-neutral-700">
            <v-button
              name="button-link"
              @click="handleToolbarClick('settings')"
              v-tooltip.bottom.oY5="'Settings'"
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
              v-tooltip.bottom.oY5="'Dark mode'"
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
  BBootstrapFill,
  BLayoutTextSidebarReverse,
  BLayoutThreeColumns,
  BMoon,
  BGear,
} from "../icons/dist-bootstrap";
import {
  MdiMaterialDesign,
  MdiSizeS,
  MdiSizeM,
  MdiSizeL,
} from "../icons/dist-mdi";

export default {
  setup() {
    let store = useStore();
    
    let handleToolbarClick = (option) => {
      if (option === "stacked") store.view = "stacked";
      else if (option === "columns") store.view = "columns";
      else if (option === "sm") store.size = "sm";
      else if (option === "md") store.size = "md";
      else if (option === "lg") store.size = "lg";
      else if (option === "dark") store.dark = !store.dark;
      else if (option === "settings") store.sidepanelState = store.sidepanelState === "settings" ? "icons" : "settings"
    };

    return {
      store,
      handleToolbarClick,
      BLayoutTextSidebarReverse,
      BLayoutThreeColumns,
      BMoon,
      BGear,
      MdiSizeS,
      MdiSizeM,
      MdiSizeL,
    }
  },
}
</script>
