<template>
  <div :class="{ 'dark': store.dark }">
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
</style>
