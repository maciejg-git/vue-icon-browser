<template>
  <v-navbar
    sticky
    class="flex items-center justify-between"
  >
    <span class="text-xl font-bold text-gray-700 dark:text-gray-200 ml-2">
      Vue-icons
    </span>
    <div class="flex items-center px-2">
      <v-button name="button-link" @click="store.toggleDarkMode()">
        <v-icon
          :name="store.dark ? 'b-Sun' : 'b-moon'"
          class="h-7 w-7 text-neutral-700 dark:text-neutral-400 mx-2"
        ></v-icon>
      </v-button>
    </div>
  </v-navbar>

  <div class="flex mx-16 dark:bg-neutral-800">
    <div class="flex-1">
      <div class="mx-auto">
        <!-- filter input -->

        <icons-main-filter />

        <v-divider class="my-6 dark:border-neutral-700" />

        <!-- toolbar -->

        <icons-main-toolbar />

        <!-- icons -->

        <div class="flex mt-4 justify-between">
          <div>
            <!-- selected icons -->

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
                @bootstrap-loaded="handleVendorLoaded('bootstrap')"
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
              <icons-vendor-mdi @mdi-loaded="handleVendorLoaded('mdi')" />
            </div>

            <div v-if="store.fontawesome.active" class="px-2">
              <header>
                <v-icon
                  name="fa-font-awesome-brand"
                  class="h-8 w-8 text-purple-500 mr-2"
                ></v-icon>
                Font Awesome Icons
              </header>
              <icons-vendor-fontawesome
                @fontawesome-loaded="handleVendorLoaded('fontawesome')"
              />
            </div>
          </div>

          <!-- icons demo -->

          <div
            v-if="isDemoVisible"
            class="mx-2 relative border-l dark:border-dark-700"
          >
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
      <icons-settings />
    </v-sidepanel>
  </div>

  <icons-main-footer />
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "../composition/useStore";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSettings from "./IconsSettings.vue";
import IconsMainToolbar from "./IconsMainToolbar.vue";
import IconsDemo from "./IconsDemo.vue";
import IconsMainSelected from "./IconsMainSelected.vue";
import IconsVendors from "./IconsVendors.vue";
import IconsMainFooter from "./IconsMainFooter.vue";
import IconsMainFilter from "./IconsMainFilter.vue";

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
    IconsMainFooter,
    IconsMainFilter,
  },
  setup() {
    let store = useStore();

    let isDemoVisible = computed(() => {
      return (
        store.currentIconDemo &&
        (store.isAnyVendorLoaded || store.selectedIcons.length)
      );
    });

    let handleVendorLoaded = (vendor) => store.loadVendorComplete(vendor);

    return {
      store,
      isDemoVisible,
      handleVendorLoaded,
    };
  },
};
</script>

<style scoped>
header {
  @apply text-xl font-semibold flex items-center w-full my-6 mx-2 dark:text-neutral-300;
}
</style>
