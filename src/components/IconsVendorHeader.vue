<template>
  <header
    class="text-xl font-semibold flex items-center w-full my-6 mx-2 dark:text-neutral-300"
  >
    <v-icon
      :name="store[vendor].icon"
      class="h-8 w-8 text-purple-500 mr-2"
    ></v-icon>
    {{ store[vendor].name }}
  </header>
</template>

<script>
import { useStore } from "../composition/useStore";

export default {
  props: {
    vendor: { type: String, default: "" },
  },
  setup() {
    let store = useStore();

    return {
      store,
    };
  },
};
</script>
