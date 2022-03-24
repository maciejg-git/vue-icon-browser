<template>
  <icons-vendor :icons="icons" vendor="bootstrap"></icons-vendor>
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/dist-bootstrap";
import tags from "../icons/dist-bootstrap/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData, tags);

    onMounted(() => emit("bootstrap-loaded"));

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
