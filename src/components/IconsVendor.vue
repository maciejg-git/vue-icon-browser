<template>
  <div>
    <div v-if="iconsFiltered.length === 0" class="flex">
      <span class="text-lg dark:text-gray-300">
        Nothing found for current filter.
      </span>
    </div>
    <div @click="handleClickIcon($event)">
      <template v-for="(icon, index) in iconsFiltered">
        <div class="icon-tile" :data-icon="icon.name" :data-index="index">
          <component
            :is="icon"
            class="text-gray-600 dark:text-gray-400"
            :class="[
              iconSizeClasses[store.size],
              { 'icon--selected': icon.selected.value },
            ]"
          ></component>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "../composition/useStore";
import { generateTags } from "../icons.js";

export default {
  props: {
    icons: { type: Object, default: undefined },
  },
  setup(props, { emit }) {
    let store = useStore();

    let iconSizeClasses = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let lastSelectedIcon = inject("last-selected-icon");

    //generate tags
    let tags = generateTags(props.icons);

    // filter icons
    let iconsFiltered = computed(() => {
      if (!store.filter) return props.icons;
      let filter = store.filter;
      if (!filter.length) return;
      let res = {};
      for (let t of tags) {
        if (t[0].includes(filter)) {
          for (let i of t[1]) {
            res[i.$_icon.name] = i;
          }
        }
      }
      return Object.values(res);
    });

    let unselectIcon = (icon) => {
      let index = store.selectedIcons.findIndex((i) => {
        return icon.$_icon.name === i.$_icon.name;
      });
      store.selectedIcons.splice(index, 1);
      icon.selected.value = false;
      lastSelectedIcon.value = null;
      // if (icon == store.currentIconDemo) store.currentIconDemo = null
    };

    // click to select icon
    let selectIcon = (ev, icon) => {
      let selectedIcons = icon;
      if (
        ev.shiftKey &&
        lastSelectedIcon.value &&
        lastSelectedIcon.value.vendor == icon.vendor
      ) {
        if (lastSelectedIcon.value) {
          let from = iconsFiltered.value.indexOf(lastSelectedIcon.value);
          let to = iconsFiltered.value.indexOf(icon);
          if (to < from) [from, to] = [to, from];
          selectedIcons = iconsFiltered.value.slice(from, to + 1);
        }
      }

      let isArray = Array.isArray(selectedIcons);

      if (!isArray && selectedIcons.selected.value) {
        unselectIcon(selectedIcons);
        return;
      }

      if (isArray) {
        selectedIcons.forEach((i) => {
          if (!i.selected.value) {
            store.selectedIcons.push(i);
            i.selected.value = true;
          }
        });
        lastSelectedIcon.value = selectedIcons[selectedIcons.length - 1];
      } else {
        store.selectedIcons.push(selectedIcons);
        selectedIcons.selected.value = true;
        lastSelectedIcon.value = selectedIcons;
        store.currentIconDemo = selectedIcons;
      }
    };

    // handle template events

    let handleClickIcon = (ev) => {
      let targetData = ev.target.dataset;
      let index = targetData.index;
      if (index) selectIcon(ev, iconsFiltered.value[index]);
    };

    return {
      emit,
      selectIcon,
      iconsFiltered,
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
header {
  @apply my-10 text-2xl font-bold;
}
</style>
