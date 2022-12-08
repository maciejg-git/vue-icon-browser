<template>
  <icons-vendor :icons="icons" vendor="heroicons" />
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/heroicons";
import { useStore } from "../composition/useStore";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let store = useStore();

    let icons = loadIcons(iconsData);

    store.heroicons.loadedCount = icons.length

    onMounted(() => emit("vendor-loaded", 'heroicons'));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
