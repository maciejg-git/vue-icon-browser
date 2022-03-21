<template>
  <div class="flex items-end justify-center">
    <v-input
      type="search"
      v-model="filter"
      placeholder="Start typing to filter..."
      class="w-full mt-8"
    />
    <v-button style-button="primary-outline" class="ml-4" @click="filter = ''">
      Clear
    </v-button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "../composition/useStore";
import { useDebounce } from "@vueuse/core";

export default {
  setup() {
    let store = useStore();

    let filter = ref("");

    store.filter = useDebounce(filter, 200);

    return {
      filter,
    };
  },
};
</script>
