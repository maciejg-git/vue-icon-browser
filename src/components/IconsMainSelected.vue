<template>
  <div>
    <div @click="handleClickIcon($event)">
      <template v-for="(icon, index) in store.selectedIcons">
        <div class="icon-tile" :data-icon="icon.name" :data-index="index">
          <component
            :is="icon"
            class="text-gray-600 dark:text-gray-400"
            :class="[iconSizeClasses[store.size]]"
          ></component>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { useStore } from "../composition/useStore";

export default {
  props: {
  },
  setup(props) {
    let store = useStore();

    let iconSizeClasses = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let handleClickIcon = (ev) => {
      let index = ev.target.dataset.index;
      if (index) store.currentIconDemo = store.selectedIcons[index];
    };

    return {
      store,
      iconSizeClasses,
      handleClickIcon,
    };
  },
};
</script>

<style scoped>
svg {
  display: inline;
  pointer-events: none;
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
