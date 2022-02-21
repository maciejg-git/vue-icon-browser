<template>
  <div>
    <div @click="handleClickIcon($event)">
      <template v-for="(icon, index) in store.selectedIcons">
        <div
          class="icon-tile relative"
          :data-index="index"
          @mouseenter="handleMouseenterIcon(icon)"
          @mouseleave="handleMouseleaveIcon"
        >
          <v-close-button
            v-show="hoveredIcon === icon"
            style-close-button="small"
            class="absolute -top-2 -left-2 bg-neutral-600 p-0.5 rounded"
            @click="handleClickUnselect(icon)"
          ></v-close-button>
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
import { ref } from "vue";
import { useStore } from "../composition/useStore";

export default {
  setup(props) {
    let store = useStore();

    let hoveredIcon = ref(null);

    let iconSizeClasses = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let handleClickIcon = (ev) => {
      let index = ev.target.dataset.index;
      if (index) store.currentIconDemo = store.selectedIcons[index];
    };

    let handleMouseenterIcon = (icon) => {
      hoveredIcon.value = icon;
    };

    let handleMouseleaveIcon = () => {
      hoveredIcon.value = null;
    };

    let handleClickUnselect = (icon) => {
      store.unselectIcon(icon);
    }

    return {
      store,
      hoveredIcon,
      iconSizeClasses,
      handleClickIcon,
      handleMouseenterIcon,
      handleMouseleaveIcon,
      handleClickUnselect,
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
