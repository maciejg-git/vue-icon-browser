<template>
  <div class="min-h-screen flex flex-col">

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
    
    <div class="flex justify-between items-center mt-8">
      <!-- filter -->
    
      <div class="flex flex-1 mx-10">
        <icons-main-filter />
      </div>
    
      <!-- toolbar -->
    
      <div class="flex mr-10">
        <icons-main-toolbar />
      </div>
    </div>
    
    <v-divider class="my-8 dark:border-neutral-700" />
    
    <div class="flex justify-between">
      <!-- icons -->
    
      <div class="w-full">
        <!-- selected icons -->
    
        <div class="w-10/12 mx-auto my-10" v-show="store.selectedIcons.length">
          <icons-main-selected />
        </div>
    
        <div v-if="!store.isAnyVendorLoaded" class="w-10/12 mx-auto">
          <span class="text-xl font-semibold dark:text-gray-300">
            No icons loaded.
          </span>
        </div>
    
        <div v-if="store.bootstrap.active" class="w-10/12 mx-auto">
          <icons-vendor-header vendor="bootstrap" />
          <icons-vendor-bootstrap @vendor-loaded="handleVendorLoaded" />
        </div>
    
        <div v-if="store.mdi.active" class="w-10/12 mx-auto">
          <icons-vendor-header vendor="mdi" />
          <icons-vendor-mdi @vendor-loaded="handleVendorLoaded" />
        </div>
    
        <div v-if="store.fontawesome.active" class="w-10/12 mx-auto">
          <icons-vendor-header vendor="fontawesome" />
          <icons-vendor-fontawesome @vendor-loaded="handleVendorLoaded" />
        </div>
    
        <div v-if="store.heroicons.active" class="w-10/12 mx-auto">
          <icons-vendor-header vendor="heroicons" />
          <icons-vendor-heroicons @vendor-loaded="handleVendorLoaded" />
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
    
    <!-- sidepanel -->
    
    <v-sidepanel v-model="store.isSidepanelActive" width="420px">
      <template #header>
        <span class="font-semibold dark:text-gray-300">Settings</span>
      </template>
      <icons-settings />
    </v-sidepanel>
    
    <div class="mt-auto">
      <icons-main-footer />
    </div>
  </div>
</template>

<script setup>
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

let IconsVendorBootstrap = defineAsyncComponent({
  loader: () => import("./IconsVendorBootstrap.vue"),
  loadingComponent: LoadingProgress,
});
let IconsVendorMdi = defineAsyncComponent({
  loader: () => import("./IconsVendorMdi.vue"),
  loadingComponent: LoadingProgress,
});
let IconsVendorFontawesome = defineAsyncComponent({
  loader: () => import("./IconsVendorFontawesome.vue"),
  loadingComponent: LoadingProgress,
});
let IconsVendorHeroicons = defineAsyncComponent({
  loader: () => import("./IconsVendorHeroicons.vue"),
  loadingComponent: LoadingProgress,
});
let store = useStore();

let isDemoVisible = computed(() => {
  return (
    store.currentIconDemo &&
    (store.isAnyVendorLoaded || store.selectedIcons.length)
  );
});

let handleVendorLoaded = (vendor) => {
  store.loadVendorComplete(vendor);
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
