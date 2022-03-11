<template>
  <icons-vendor :icons="icons"></icons-vendor>
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/dist-mdi";
import tags from "../icons/dist-mdi/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData, tags);

    onMounted(() => emit("mdi-loaded"));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
