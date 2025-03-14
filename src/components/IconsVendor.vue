<template>
  <div
    v-if="!iconsFiltered.length"
    class="font-bold text-lg text-gray-400 dark:text-gray-400 py-6"
  >
    Nothing found.
  </div>
  <div
    v-else
    class="flex flex-wrap items-center"
    @click="handleClickIcon($event)"
  >
    <template v-for="(icon, index) in iconsFiltered" :key="icon.$_icon.uid">
      <template v-if="store.groupBy">
        <div v-if="icon.newLine" class="w-full my-4">
          <span class="text-text-600 dark:text-text-400 font-semibold">
            {{ icon.$_icon.tags[0].toUpperCase() }}
          </span>
        </div>
      </template>
      <div class="icon-tile" :class="{'hover:scale-[1.8]': store.settings.zoomOnHover}" :data-index="index">
        <component
          :is="icon"
          class="text-gray-600 dark:text-gray-400"
          :class="{
            ...iconSizeClasses,
            'icon--selected': icon.selected.value,
          }"
        ></component>
      </div>
    </template>

    <v-button
      v-if="!store.filter && !store[vendor].loadedAll"
      mod-button="variant:primaryOutline"
      class="ml-2"
      @click="handleClickLoadAllButton"
    >
      Load All ({{ store[vendor].loadedCount }})
    </v-button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { useStore } from "../composition/useStore";
import { generateTags } from "../icons.js";

let props = defineProps({
  icons: { type: Object, default: undefined },
  vendor: { type: String, default: "" },
});

let store = useStore();

let iconSizeClasses = computed(() => {
  return {
    "h-6 w-6 m-2": store.size === "sm",
    "h-7 w-7 m-2": store.size === "md",
    "h-10 w-10 m-3": store.size === "lg",
  };
});

let isReady = ref(false);

let tags = null;

generateTags(props.icons, props.vendor).then((res) => {
  tags = res;
  isReady.value = true;
});

let groupBy = (icons) => {
  let lastTag = "";

  return icons.map((i) => {
    if (i.$_icon.tags[0] !== lastTag) {
      i.newLine = true;
    } else {
      i.newLine = false;
    }
    lastTag = i.$_icon.tags[0];
    return i;
  });
};

let iconsFiltered = computed(() => {
  if (!isReady.value) return [];

  let filter = store.filter;
  let icons = null;

  if (!filter) {
    icons = store[props.vendor].loadedAll
      ? props.icons
      : props.icons.slice(0, store.loadedIconsCount);

    if (store.groupBy) {
      return groupBy(icons);
    } else {
      return icons;
    }
  }

  let res = new Map();

  for (let t of tags) {
    if (t[0].includes(filter)) {
      for (let i of t[1]) {
        res.set(i.$_icon.name, i);
      }
    }
  }

  icons = Array.from(res.values());

  return store.groupBy ? groupBy(icons) : icons;
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
