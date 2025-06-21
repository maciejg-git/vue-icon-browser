<template>
  <div class="flex min-h-screen flex-col dark:[color-scheme:dark]">
    <v-navbar
      position="sticky"
      class="flex items-center justify-between py-2 px-4"
    >
      <span class="ml-2 text-xl font-bold text-gray-700 dark:text-gray-200">
        Icon Browser
      </span>
      <div class="flex items-center px-2">
        <v-button mod-button="preset:plain" @click="store.toggleDarkMode()">
          <transition name="fade-slow">
            <v-icon
              :name="store.dark ? 'b-Sun' : 'b-moon'"
              class="mx-2 h-7 w-7 text-neutral-700 dark:text-neutral-400"
            ></v-icon>
          </transition>
        </v-button>
      </div>
    </v-navbar>

    <div class="flex items-center justify-between bg-gradient-to-b from-gray-50 to-white py-8 dark:from-[#2e2e2d] dark:to-[#262625]">
      <!-- filter -->

      <div class="mx-10 flex flex-1">
        <icons-main-filter />
      </div>

      <!-- toolbar -->

      <div class="mr-10 flex">
        <icons-main-toolbar />
      </div>
    </div>

    <!-- <v-divider class="my-8 dark:border-neutral-700" /> -->
    <div class="my-4"></div>

    <div class="flex flex-1 justify-between">
      <!-- icons -->

      <div class="flex w-full flex-1 flex-col overflow-y-auto max-h-[calc(100vh_-_12rem)]">
        <!-- selected icons -->

        <div class="mx-auto w-10/12" v-show="store.selectedIcons.length">
          <icons-main-selected />
        </div>

        <div v-if="!store.isAnyVendorLoaded" class="mx-auto my-auto w-10/12">
          <span class="text-xl font-semibold dark:text-gray-300">
            No icons loaded. Load icons from:
            <span @click="store.toggleVendor('bootstrap')" class="text-blue-500 cursor-pointer">Bootstrap</span>,
            <span @click="store.toggleVendor('mdi')" class="text-blue-500 cursor-pointer">Material Design Icons</span>,
            <span @click="store.toggleVendor('fontawesome')" class="text-blue-500 cursor-pointer">Font Awesome</span> or
            <span @click="store.toggleVendor('heroicons')" class="text-blue-500 cursor-pointer">Heroicons</span>.
          </span>
        </div>

        <div v-if="store.bootstrap.active" class="mx-auto w-10/12">
          <icons-vendor-header vendor="bootstrap" />
          <icons-vendor-bootstrap @vendor-loaded="handleVendorLoaded" />
        </div>

        <div v-if="store.mdi.active" class="mx-auto w-10/12">
          <icons-vendor-header vendor="mdi" />
          <icons-vendor-mdi @vendor-loaded="handleVendorLoaded" />
        </div>

        <div v-if="store.fontawesome.active" class="mx-auto w-10/12">
          <icons-vendor-header vendor="fontawesome" />
          <icons-vendor-fontawesome @vendor-loaded="handleVendorLoaded" />
        </div>

        <div v-if="store.heroicons.active" class="mx-auto w-10/12">
          <icons-vendor-header vendor="heroicons" />
          <icons-vendor-heroicons @vendor-loaded="handleVendorLoaded" />
        </div>

        <div class="mt-auto">
          <icons-main-footer />
        </div>
      </div>

      <!-- icons demo -->

      <transition name="fade">
        <div
          v-if="isDemoVisible"
          class="relative mx-2 border-l dark:border-dark-700"
        >
          <icons-demo />
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
