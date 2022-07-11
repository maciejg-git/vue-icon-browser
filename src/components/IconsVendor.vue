<template>
  <div
    v-if="!iconsFiltered.length"
    class="font-bold text-lg text-gray-400 dark:text-gray-400 py-6"
  >
    Nothing found for current filter.
  </div>
  <div
    v-else
    class="flex flex-wrap items-center"
    @click="handleClickIcon($event)"
  >
    <template v-for="(icon, index) in iconsFiltered">
      <div class="icon-tile" :data-index="index">
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

    <v-button
      v-if="!store.filter && !store[vendor].loadedAll"
      style-button="primary-outline"
      class="ml-2"
      @click="handleClickLoadAllButton"
    >
      Load All
    </v-button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "../composition/useStore";
import { generateTags } from "../icons.js";

export default {
  props: {
    icons: { type: Object, default: undefined },
    vendor: { type: String, default: "" },
  },
  setup(props, { emit }) {
    let store = useStore();

    let iconSizeClasses = {
      sm: "h-6 w-6 m-2",
      md: "h-8 w-8 m-2",
      lg: "h-12 w-12 m-3",
    };

    let tags = generateTags(props.icons);

    let iconsFiltered = computed(() => {
      let filter = store.filter;

      if (!filter) {
        return store[props.vendor].loadedAll
          ? props.icons
          : props.icons.slice(0, store.loadedIconsCount);
      }

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

    let selectIcon = (ev, icon) => {
      let selectedIcons = icon;
      if (
        ev.shiftKey &&
        store.lastSelectedIcon &&
        store.lastSelectedIcon.vendor == icon.vendor
      ) {
        if (store.lastSelectedIcon) {
          let from = iconsFiltered.value.indexOf(store.lastSelectedIcon);
          let to = iconsFiltered.value.indexOf(icon);
          if (to < from) [from, to] = [to, from];
          selectedIcons = iconsFiltered.value.slice(from, to + 1);
        }
      }

      store.selectIcons(selectedIcons);
    };

    // handle template events

    let handleClickIcon = (ev) => {
      let targetData = ev.target.dataset;
      let index = targetData.index;
      if (index) selectIcon(ev, iconsFiltered.value[index]);
    };

    let handleClickLoadAllButton = () => {
      store[props.vendor].loadedAll = true;
    }

    return {
      store,
      emit,
      iconsFiltered,
      selectIcon,
      iconSizeClasses,
      handleClickIcon,
      handleClickLoadAllButton,
    };
  },
};
</script>

<style scoped>
svg {
  display: inline;
  pointer-events: none;
}
.icon--selected {
  @apply text-red-500
    dark:text-red-500;
}
</style>
