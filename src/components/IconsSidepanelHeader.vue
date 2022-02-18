<template>
  <div class="mx-4 my-4">
    <!-- <div class="flex rounded-full bg-gray-100 px-4 py-1 dark:bg-neutral-700 dark:text-neutral-300"> -->
    <div class="py-1">
      <span class="text-lg font-semibold dark:text-neutral-300"> {{ text }} </span>
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
