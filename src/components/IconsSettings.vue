<template>
  <div class="px-5">
    <div class="flex items-center my-2">
      <v-checkbox v-model="settings.vendorPrefix"></v-checkbox>
      <label for="" class="ml-3 dark:text-gray-300">add vendor prefixes to icon names</label>
    </div>
    <!-- <div class="flex items-center mt-2"> -->
    <!--   <v-checkbox v-model="settings.originalNames"></v-checkbox> -->
    <!--   <label for="" class="ml-3">Original icon names</label> -->
    <!-- </div> -->
    <div class="flex items-center mt-2">
      <v-checkbox v-model="settings.kebabCase"></v-checkbox>
      <label for="" class="ml-3 dark:text-gray-300">use kebab-case for icon names</label>
    </div>
  </div>
</template>

<script>
import useSettings from "../composition/use-settings"

export default {
  props: {
  },
  setup() {
    let settings = useSettings()

    return {
      settings,
    };
  },
};
</script>

<style scoped>
</style>
