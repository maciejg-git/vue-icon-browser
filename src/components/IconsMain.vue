<template>
  <v-navbar sticky class="flex items-center justify-between">
    <span class="text-xl font-bold text-gray-700 dark:text-gray-200 ml-2">
      Vue-icons
    </span>
    <div class="flex items-center px-2">
      <v-button base="button-link" @click="store.toggleDarkMode()">
        <transition name="fade-slow">
          <v-icon
            :name="store.dark ? 'b-Sun' : 'b-moon'"
            class="h-7 w-7 text-neutral-700 dark:text-neutral-400 mx-2"
          ></v-icon>
        </transition>
      </v-button>
    </div>
  </v-navbar>

  <div class="flex mx-16 dark:bg-neutral-800">
    <div class="flex-1">
      <div class="mx-auto">

        <icons-main-filter />

        <v-divider class="my-6 dark:border-neutral-700" />

        <icons-main-toolbar />

        <!-- icons -->

        <div class="flex mt-4 justify-between">

          <!-- icons -->

          <div>
            <!-- selected icons -->

            <div class="px-2" v-show="store.selectedIcons.length">
              <icons-main-selected />
            </div>

            <div v-if="store.bootstrap.active" class="px-2">
              <icons-vendor-header vendor="bootstrap" />
              <icons-vendor-bootstrap
                @bootstrap-loaded="handleVendorLoaded('bootstrap')"
              />
            </div>

            <div v-if="store.mdi.active" class="px-2">
              <icons-vendor-header vendor="mdi" />
              <icons-vendor-mdi @mdi-loaded="handleVendorLoaded('mdi')" />
            </div>

            <div v-if="store.fontawesome.active" class="px-2">
              <icons-vendor-header vendor="fontawesome" />
              <icons-vendor-fontawesome
                @fontawesome-loaded="handleVendorLoaded('fontawesome')"
              />
            </div>

            <div v-if="store.heroicons.active" class="px-2">
              <icons-vendor-header vendor="heroicons" />
              <icons-vendor-heroicons
                @heroicons-loaded="handleVendorLoaded('heroicons')"
              />
            </div>
          </div>

          <!-- icons demo -->

          <transition name="fade">
            <div
              v-if="isDemoVisible"
              class="mx-2 relative border-l dark:border-dark-700"
            >
              <div class="sticky top-20">
                <icons-demo />
              </div>
            </div>
          </transition>
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
import IconsMainFooter from "./IconsMainFooter.vue";
import IconsMainFilter from "./IconsMainFilter.vue";
import IconsVendorHeader from "./IconsVendorHeader.vue";

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
    IconsVendorHeroicons: defineAsyncComponent({
      loader: () => import("./IconsVendorHeroicons.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsMainToolbar,
    IconsDemo,
    IconsMainSelected,
    IconsSettings,
    IconsMainFooter,
    IconsMainFilter,
    IconsVendorHeader,
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.12s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 1s ease, transform 0.6s ease;
}
.fade-slow-enter-from,
.fade-slow-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
