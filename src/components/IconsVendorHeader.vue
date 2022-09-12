<template>
  <header
    class="text-xl flex items-center w-full my-10 mx-2 dark:text-neutral-300"
  >
    <v-icon
      :name="store[vendor].icon"
      class="h-10 w-10 text-purple-500 mr-2"
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
