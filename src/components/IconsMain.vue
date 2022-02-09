<template>
  <v-navbar
    sticky
    class="flex items-center text-gray-200 px-4 py-2 shadow-none h-12 dark:bg-neutral-800"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
  </v-navbar>

  <div class="flex w-full dark:bg-neutral-800">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <!-- filter input -->

        <div
          v-if="store.isAnyVendorLoaded"
          class="flex items-end justify-center"
        >
          <v-input
            type="search"
            v-model="filter"
            placeholder="Start typing to filter..."
            class="w-full mt-10"
          />
          <v-button
            style-button="primary-outline"
            class="ml-4"
            @click="filter = ''"
          >
            Clear
          </v-button>
        </div>

        <v-divider class="my-8 dark:border-neutral-700"></v-divider>

        <!-- size and view options -->

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

        <!-- no icons loaded -->

        <div v-if="!store.isAnyVendorLoaded" class="flex justify-center h-40">
          <div class="flex flex-col mt-auto">
            <p class="text-xl">
              No icon vendors loaded. Add icons to start browsing.
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('bootstrap')"
              >
                Add Bootstrap Icons.
              </a>
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('mdi')"
              >
                Add Material Design Icons.
              </a>
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('fontawesome')"
              >
                Add Font Awesome Icons.
              </a>
            </p>
          </div>
        </div>

        <!-- icons -->

        <div
          :class="{ [iconViews.columns]: store.view === 'columns' }"
          class="mt-8"
        >
          <div v-if="store.bootstrap.active" :class="{ 'flex-1': store.view === 'columns' }" class="px-2">
            <header>
              <div
                class="flex items-center w-full my-4 py-2 mx-2 dark:text-neutral-300"
              >
                <v-icon
                  :name="BBootstrapFill"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Bootstrap Icons
              </div>
            </header>
            <icons-vendor-bootstrap
              @selected-icon="selectIcon"
              @bootstrap-loaded="store.bootstrap.loading = false"
            ></icons-vendor-bootstrap>
          </div>

          <div v-if="store.mdi.active" :class="{ 'flex-1': store.view === 'columns' }" class="px-2">
            <header>
              <div
                class="flex items-center w-full my-4 py-2 mx-2 dark:text-neutral-300"
              >
                <v-icon
                  :name="MdiMaterialDesign"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Material Design Icons
              </div>
            </header>
            <icons-vendor-mdi
              @selected-icon="selectIcon"
              @mdi-loaded="store.mdi.loading = false"
            ></icons-vendor-mdi>
          </div>

          <div v-if="store.fontawesome.active" :class="{ 'flex-1': store.view === 'columns' }" class="px-2">
            <header>
              <div
                class="flex items-center w-full my-4 py-2 mx-2 dark:text-neutral-300"
              >
                <v-icon
                  :name="FaFontAwesomeFlagBrand"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Font Awesome Icons
              </div>
            </header>
            <icons-vendor-fontawesome
              @selected-icon="selectIcon"
              @fontawesome-loaded="store.fontawesome.loading = false"
            ></icons-vendor-fontawesome>
          </div>
        </div>
      </div>
    </div>

    <!-- sidepanel -->

    <icons-sidepanel
      :selected-icons="selectedIcons"
      @unselect-icon="unselectIcon"
      @clear-icon-list="clearSelected"
      @toggle-vendor="toggleVendor($event)"
    />
  </div>
</template>

<script>
import { ref, provide, defineAsyncComponent } from "vue";
import { useStore } from "../composition/useStore";
import { useDebounce } from "@vueuse/core";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSidepanel from "./IconsSidepanel.vue";
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
import { FaFontAwesomeFlagBrand } from "../icons/dist-fontawesome";

export default {
  components: {
    IconsVendorBootstrap: defineAsyncComponent({
      loader: () => import("./IconsVendorBootstrap.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsVendorMdi: defineAsyncComponent({
      loader: () => import("./IconsVendorMdi.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsVendorFontawesome: defineAsyncComponent({
      loader: () => import("./IconsVendorFontawesome.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsSidepanel,
  },
  setup() {
    let store = useStore();

    let iconViews = {
      stacked: "",
      columns: "flex",
    };

    let filter = ref("");

    store.$patch({
      size: "sm",
      view: "stacked",
      filter: useDebounce(filter, 200),
    });

    // icon selection

    let selectedIcons = ref([]);
    let lastSelectedIcon = ref({});
    let currentIcon = ref(null);

    let unselectIcon = (icon) => {
      let index = selectedIcons.value.findIndex((i) => {
        return icon.$_icon.name === i.$_icon.name;
      });
      selectedIcons.value.splice(index, 1);
      icon.selected.value = false;
      lastSelectedIcon.value = null;
    };

    let selectIcon = (icons) => {
      let isArray = Array.isArray(icons);

      if (!isArray && icons.selected.value) {
        unselectIcon(icons);
        return;
      }

      if (isArray) {
        icons.forEach((i) => {
          if (!i.selected.value) {
            selectedIcons.value.push(i);
            i.selected.value = true;
          }
        });
        lastSelectedIcon.value = icons[icons.length - 1];
        currentIcon.value = icons[0];
      } else {
        selectedIcons.value.push(icons);
        icons.selected.value = true;
        lastSelectedIcon.value = icons;
        currentIcon.value = icons;
      }
    };

    let clearSelected = () => {
      selectedIcons.value.forEach((i) => {
        i.selected.value = false;
      });
      selectedIcons.value = [];
    };

    // vendors
    let toggleVendor = (vendor) => {
      if (!store[vendor].active) store[vendor].loading = true;
      store[vendor].active = !store[vendor].active;
    };

    let handleToolbarClick = (option) => {
      if (option === "stacked") store.view = "stacked";
      else if (option === "columns") store.view = "columns";
      else if (option === "sm") store.size = "sm";
      else if (option === "md") store.size = "md";
      else if (option === "lg") store.size = "lg";
      else if (option === "dark") store.dark = !store.dark;
      else if (option === "settings") store.sidepanelState = store.sidepanelState === "settings" ? "icons" : "settings"
    };

    // provide for IconsVendor
    provide("last-selected-icon", lastSelectedIcon);

    return {
      filter,
      selectIcon,
      unselectIcon,
      selectedIcons,
      clearSelected,
      iconViews,
      toggleVendor,
      store,
      currentIcon,
      handleToolbarClick,
      BBootstrapFill,
      MdiMaterialDesign,
      FaFontAwesomeFlagBrand,
      BLayoutTextSidebarReverse,
      BLayoutThreeColumns,
      BMoon,
      BGear,
      MdiSizeS,
      MdiSizeM,
      MdiSizeL,
    };
  },
};
</script>

<style scoped>
svg {
  pointer-events: none;
}
header {
  @apply my-4 text-xl font-semibold tracking-wide;
}
.sidebar {
  min-width: 400px;
}
.sidebar-icons {
  max-height: 75%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
