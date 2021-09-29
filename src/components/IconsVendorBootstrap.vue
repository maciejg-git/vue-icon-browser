<template>
  <icons-vendor :icons="icons" :size="size" :filter="filter"></icons-vendor>
</template>

<script>
import { ref, markRaw, onMounted } from "vue"
import IconsVendor from "./IconsVendor.vue"
import * as icons from "../icons/dist-bootstrap";

export default {
  props: {
    vendor: { type: String, default: undefined },
    filter: { type: String, default: undefined },
    size: { type: String, default: undefined },
  },
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let selectIcon = (icon) => {
      emit('selected-icon', icon)
    }

    for (let icon in icons) {
      markRaw(icons[icon])
      icons[icon].selected = ref(false)
    }

    onMounted(() => {
      emit('bootstrap-loaded')
    })

    return {
      icons,
      emit,
      selectIcon,
    };
  },
};
</script>

<style scoped>
svg {
  display: inline;
  pointer-events: none;
}
header {
  @apply my-10 text-2xl font-bold;
}
</style>
