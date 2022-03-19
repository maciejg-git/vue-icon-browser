<template>
  <icons-vendor :icons="icons" vendor="fontawesome"></icons-vendor>
</template>

<script>
import { onMounted } from "vue"
import IconsVendor from "./IconsVendor.vue"
import { useStore } from "../composition/useStore";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/dist-fontawesome";
import tags from "../icons/dist-fontawesome/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let store = useStore();

    let icons = loadIcons(iconsData, tags);

    store.fontawesome.icons = icons;

    onMounted(() => emit('fontawesome-loaded'))

    return {
      icons,
    };
  },
};
</script>

<style scoped>
</style>
