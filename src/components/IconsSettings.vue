<template>
  <div class="px-5">
    <div class="flex items-center my-2">
      <v-checkbox
        id="settings-vendor-prefix"
        v-model="store.settings.vendorPrefix"
      ></v-checkbox>
      <label for="settings-vendor-prefix" class="ml-3 dark:text-gray-300">
        add vendor prefixes to icon names
      </label>
    </div>
    <!-- <div class="flex items-center mt-2"> -->
    <!--   <v-checkbox v-model="settings.originalNames"></v-checkbox> -->
    <!--   <label for="" class="ml-3">Original icon names</label> -->
    <!-- </div> -->
    <div class="flex items-center mt-2">
      <v-checkbox
        id="settings-kebab-case"
        v-model="store.settings.kebabCase"
      ></v-checkbox>
      <label for="settings-kebab-case" class="ml-3 dark:text-gray-300"
        >use kebab-case for icon names</label
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../composition/useStore";

let store = useStore();
</script>

<style scoped></style>
