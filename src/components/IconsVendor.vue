<template>
  <div>
    <div v-if="icons.length == 0" class="flex">
      <span class="text-lg"> Nothing found for current filter. </span>
    </div>
    <div>
      <template v-for="(icon, index) in iconsFiltered">
        <div
          class="inline-block cursor-pointer bg-gray-100 rounded-md p-2 m-2"
          :data-icon="icon.name"
          @click="selectIcon($event, icon)"
        >
          <component
            :is="icon"
            class="icon-browser"
            :class="[store.size, { 'icon--selected': icon.selected.value }]"
          ></component>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "../composition/useStore";
import { generateTags } from "../icons.js"

export default {
  props: {
    icons: { type: Object, default: undefined },
  },
  setup(props, { emit }) {
    let store = useStore();

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
      emit("selected-icon", selectedIcons);
    };

    return {
      emit,
      selectIcon,
      iconsFiltered,
      store,
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
