<template>
  <div>
    <IconsMain></IconsMain>
  </div>
</template>

<script setup>
import { provide } from "vue"
import IconsMain from "./components/IconsMain.vue";
import { useStore } from "./composition/useStore";
import * as styles from "./styles/components"

provide("mods", styles)

let store = useStore();
store.initDarkMode();

document.title = "Vue Icon Browser";
</script>

<style>
body {
  @apply 
    bg-white 
    dark:bg-[#252525];
}
body::-webkit-scrollbar {
  width: 0.5em;
}
body::-webkit-scrollbar-track {
}
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
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
