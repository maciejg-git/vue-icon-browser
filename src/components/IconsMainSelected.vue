<template>
  <div>
    <div @click="handleClickIcon($event)">
      <transition-group name="fade">
        <template
          v-for="(icon, index) in store.selectedIcons"
          :key="icon.getIconName()"
        >
          <div
            class="icon-tile relative"
            :data-index="index"
            @mouseenter="handleMouseenterIcon(icon)"
            @mouseleave="handleMouseleaveIcon"
            v-tooltip.bottom.oY7="icon.getIconName()"
          >
            <v-close-button
              v-show="hoveredIcon === icon"
              mod-close-button="size:small"
              class="absolute -top-2 -left-2 bg-neutral-600 p-0.5 rounded"
              @click="handleClickUnselect(icon)"
            ></v-close-button>
            <component
              :is="icon"
              class="text-gray-600 dark:text-gray-400"
              :class="iconSizeClasses"
            ></component>
          </div>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "../composition/useStore";

let store = useStore();

let hoveredIcon = ref(null);

let iconSizeClasses = computed(() => {
  return {
    "h-6 w-6 m-2": store.size === "sm",
    "h-7 w-7 m-2": store.size === "md",
    "h-10 w-10 m-3": store.size === "lg",
  };
});

watch(store.selectedIcons, () => {
  if (!store.selectedIcons.length) store.currentIconDemo = null;
});

let handleClickIcon = (ev) => {
  let index = ev.target.dataset.index;
  if (index) store.currentIconDemo = store.selectedIcons[index];
};

let handleMouseenterIcon = (icon) => (hoveredIcon.value = icon);

let handleMouseleaveIcon = () => (hoveredIcon.value = null);

let handleClickUnselect = (icon) => store.unselectIcon(icon);
</script>

<style scoped>
svg {
  display: inline;
  pointer-events: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
