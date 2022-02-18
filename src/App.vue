<template>
  <div>
    <IconsMain></IconsMain>
  </div>
</template>

<script>
import IconsMain from "./components/IconsMain.vue"
import { useStore } from "./composition/useStore"

export default {
components: {
  IconsMain,
},
setup() {
  let store = useStore();

  return {
    store,
  }
}
}
</script>

<style>
body {
  @apply bg-white dark:bg-neutral-800
}
.icon-tile {
  @apply inline-block
  cursor-pointer
  rounded-md 
  p-2 
  m-2 
  border 
  border-gray-200 
  hover:ring-2 
  ring-indigo-300
  dark:bg-transparent 
  dark:border-neutral-600 
  dark:ring-indigo-400;
}
</style>
