<template>
  <icons-vendor :icons="icons" :filter="filter"></icons-vendor>
</template>

<script>
import { onMounted } from "vue";
import IconsVendor from "./IconsVendor.vue";
import { loadIcons } from "../icons";
import * as iconsData from "../icons/dist-bootstrap";

export default {
  props: {
    vendor: { type: String, default: undefined },
    filter: { type: String, default: undefined },
  },
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData);

    onMounted(() => {
      emit("bootstrap-loaded");
    });

    return {
      icons,
    };
  },
};
</script>

<style scoped></style>
