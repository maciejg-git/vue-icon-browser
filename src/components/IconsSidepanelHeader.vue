<template>
  <div class="mx-4 my-4">
    <div class="flex rounded-full bg-gray-100 px-4 py-1">
      <span class="text-lg font-semibold"> {{ text }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String },
  },
  setup() {},
};
</script>
