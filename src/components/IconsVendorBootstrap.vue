<template>
  <icons-vendor :icons="icons" vendor="bootstrap" />
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/bootstrap";
import { useStore } from "../composition/useStore";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let store = useStore();

    let icons = loadIcons(iconsData);

    store.bootstrap.loadedCount = icons.length

    onMounted(() => emit("vendor-loaded", 'bootstrap'));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
