<template>
  <icons-vendor :icons="icons" vendor="mdi" />
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/mdi";
// import tags from "../icons/dist-mdi/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData);

    onMounted(() => emit("mdi-loaded"));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
