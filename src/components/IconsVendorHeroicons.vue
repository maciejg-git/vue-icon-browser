<template>
  <icons-vendor :icons="icons" vendor="heroicons" />
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/heroicons";
// import tags from "../icons/dist-bootstrap/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData);

    onMounted(() => emit("heroicons-loaded"));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
