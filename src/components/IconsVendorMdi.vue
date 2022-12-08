<template>
  <icons-vendor :icons="icons" vendor="mdi" />
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/mdi";
import { useStore } from "../composition/useStore";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let store = useStore();

    let icons = loadIcons(iconsData);

    store.mdi.loadedCount = icons.length

    onMounted(() => emit("vendor-loaded", 'mdi'));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
