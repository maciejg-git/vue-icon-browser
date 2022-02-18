<template>
  <v-navbar
    sticky
    class="flex items-center justify-between text-gray-200 px-4 py-2 shadow-none h-12 dark:bg-neutral-800"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>

    <icons-vendors></icons-vendors>
  </v-navbar>

  <div class="flex mx-16 dark:bg-neutral-800">
    <div class="flex-1">
      <div class="mx-auto">
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

        <!-- toolbar -->

        <icons-main-toolbar v-if="store.isAnyVendorLoaded"></icons-main-toolbar>

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

        <div class="flex mt-8 justify-between">
          <div>
            <div class="px-2" v-show="store.selectedIcons.length">
              <icons-main-selected />
            </div>
            <div v-if="store.bootstrap.active" class="px-2">
              <header>
                <v-icon
                  :name="BBootstrapFill"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Bootstrap Icons
              </header>
              <icons-vendor-bootstrap
                @bootstrap-loaded="store.bootstrap.loading = false"
              />
            </div>

            <div v-if="store.mdi.active" class="px-2">
              <header>
                <v-icon
                  :name="MdiMaterialDesign"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Material Design Icons
              </header>
              <icons-vendor-mdi @mdi-loaded="store.mdi.loading = false" />
            </div>

            <div v-if="store.fontawesome.active" class="px-2">
              <header>
                <v-icon
                  :name="FaFontAwesomeFlagBrand"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Font Awesome Icons
              </header>
              <icons-vendor-fontawesome
                @fontawesome-loaded="store.fontawesome.loading = false"
              />
            </div>
          </div>

          <!-- icons demo -->

          <div class="mx-4 relative">
            <div class="sticky top-20">
              <icons-demo v-if="store.currentIconDemo" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- sidepanel -->

    <v-sidepanel v-model="store.isSidepanelActive" width="420px">
      <template #header>
        <span class="font-semibold dark:text-gray-300">Settings</span>
      </template>
      <icons-settings></icons-settings>
    </v-sidepanel>
  </div>
</template>

<script>
import { ref, provide, defineAsyncComponent } from "vue";
import { useStore } from "../composition/useStore";
import { useDebounce } from "@vueuse/core";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSettings from "./IconsSettings.vue";
import IconsMainToolbar from "./IconsMainToolbar.vue";
import IconsDemo from "./IconsDemo.vue";
import IconsMainSelected from "./IconsMainSelected.vue";
import IconsVendors from "./IconsVendors.vue";

import {
  BBootstrapFill,
  BLayoutTextSidebarReverse,
  BLayoutThreeColumns,
  BMoon,
  BGear,
  BList,
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
    IconsMainToolbar,
    IconsDemo,
    IconsMainSelected,
    IconsSettings,
    IconsVendors,
  },
  setup() {
    let store = useStore();

    let filter = ref("");

    store.$patch({
      size: "sm",
      filter: useDebounce(filter, 200),
    });

    // icon selection

    let lastSelectedIcon = ref({});

    let clearSelected = () => {
      store.selectedIcons.forEach((i) => {
        i.selected.value = false;
      });
      store.selectedIcons = [];
    };

    // provide for IconsVendor
    provide("last-selected-icon", lastSelectedIcon);

    return {
      filter,
      store,
      BBootstrapFill,
      MdiMaterialDesign,
      FaFontAwesomeFlagBrand,
      BLayoutTextSidebarReverse,
      BLayoutThreeColumns,
      BMoon,
      BGear,
      BList,
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
  @apply text-xl font-semibold flex items-center w-full my-6  mx-2 dark:text-neutral-300;
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
