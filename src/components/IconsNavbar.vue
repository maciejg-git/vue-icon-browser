<template>
  <v-navbar
    sticky
    class="flex items-center text-gray-200 px-4 py-2 shadow-none h-12"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
  </v-navbar>
</template>

<script>
import { BCheckLg, BX, BXLg, BPlusLg } from "../icons/dist-bootstrap";

export default {
  props: {
    vendors: { type: Object, default: undefined },
  },
  setup(props) {
    let toggleVendor = (vendor) => {
      let vendors = props.vendors;
      if (!vendors[vendor].active) vendors[vendor].loading = true;
      vendors[vendor].active = !vendors[vendor].active;
    };

    return {
      toggleVendor,
      BCheckLg,
      BPlusLg,
    };
  },
};
</script>
