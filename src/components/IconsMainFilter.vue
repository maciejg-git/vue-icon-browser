<template>
  <div class="flex flex-1 items-end justify-center">
    <v-input
      type="search"
      v-model="filter"
      placeholder="Start typing to filter..."
    />
    <v-button mod-button="variant:primaryOutline" class="ml-4" @click="filter = ''">
      Clear
    </v-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../composition/useStore";
import { useDebounce } from "@vueuse/core";

let store = useStore();

let filter = ref("");

store.filter = useDebounce(filter, 200);
</script>
