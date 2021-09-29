<template>
  <component :is="icon"></component>
</template>

<script>
export default {
  props: {
    icon: { type: [String, Object], default: "" },
  },
};
</script>
