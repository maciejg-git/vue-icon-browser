<template>
  <component :is="icon || name"></component>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "" },
    name: { type: String, default: "" },
  },
};
</script>
