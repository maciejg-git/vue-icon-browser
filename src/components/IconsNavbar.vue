<template>
</template>

<script>
import { BCheckLg, BX, BXLg, BPlusLg } from "../icons/dist-bootstrap";

export default {
  props: {
    vendors: { type: Object, default: undefined },
  },
  setup(props) {
    return {
      toggleVendor,
      BCheckLg,
      BPlusLg,
    };
  },
};
</script>
