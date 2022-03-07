<template>
  <v-navbar
    sticky
    class="flex items-center justify-between text-gray-200 px-4 py-2 shadow-none h-12 dark:bg-neutral-800"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
    <icons-vendors />
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

        <v-divider class="my-8 dark:border-neutral-700" />

        <!-- toolbar -->

        <icons-main-toolbar v-if="store.isAnyVendorLoaded" />

        <!-- icons -->

        <div class="flex mt-8 justify-between">
          <div>
            <div class="px-2" v-show="store.selectedIcons.length">
              <icons-main-selected />
            </div>
            <div v-if="store.bootstrap.active" class="px-2">
              <header>
                <v-icon
                  name="b-bootstrap-fill"
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
                  name="mdi-material-design"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Material Design Icons
              </header>
              <icons-vendor-mdi @mdi-loaded="store.mdi.loading = false" />
            </div>

            <div v-if="store.fontawesome.active" class="px-2">
              <header>
                <v-icon
                  name="fa-font-awesome-flag-brand"
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

          <div v-if="store.currentIconDemo && (store.isAnyVendorLoaded || store.selectedIcons.length)" class="mx-2 relative">
            <div class="sticky top-20">
              <icons-demo />
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
import { ref, defineAsyncComponent } from "vue";
import { useStore } from "../composition/useStore";
import { useDebounce } from "@vueuse/core";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSettings from "./IconsSettings.vue";
import IconsMainToolbar from "./IconsMainToolbar.vue";
import IconsDemo from "./IconsDemo.vue";
import IconsMainSelected from "./IconsMainSelected.vue";
import IconsVendors from "./IconsVendors.vue";

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

    store.filter = useDebounce(filter, 200);

    return {
      filter,
      store,
    };
  },
};
</script>

<style scoped>
header {
  @apply text-xl font-semibold flex items-center w-full my-6 mx-2 dark:text-neutral-300;
}
</style>
