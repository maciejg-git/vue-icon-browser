<template>
  <div>
    <div v-if="icons.length == 0" class="flex">
      <span class="mx-auto text-lg"> Nothing found for current filter. </span>
    </div>
    <div @mouseover="handleMouseMove">
      <template v-for="(icon, index) in icons">
        <div
          class="inline-block cursor-pointer bg-gray-100 rounded-md p-2 m-2"
          :data-icon="icon.vendor + icon.name"
          @click="selectIcon($event, icon)"
        >
          <component
            :is="icon"
            class="icon-browser"
            :class="[size, { 'icon--selected': icon.selected.value }]"
          ></component>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  props: {
    vendor: { type: String, default: undefined },
    filter: { type: String, default: undefined },
    icons: { type: Object, default: undefined },
    size: { type: String, default: undefined },
  },
  setup(props, { emit }) {
    let generateTags = () => {
      let tags = {}

      for (let icon of props.icons) {
        for (let tag of icon.tags) {
          if (!tags[tag]) tags[tag] = [];
          tags[tag].push(icon);
        }
      }
      return Object.entries(tags);
    };

    //generate tags
    let tags = generateTags();

    // filter icons
    let icons = computed(() => {
      if (!props.filter) return props.icons;
      let filter = props.filter;
      if (!filter.length) return;
      let res = {};
      for (let t of tags) {
        if (t[0].includes(filter)) {
          for (let i of t[1]) {
            res[i.name] = i;
          }
        }
      }
      return Object.values(res);
    });

    // move mouse over icon
    let hoveredIcon = inject("hovered-icon");

    let handleMouseMove = (ev) => {
      let target = ev.target;
      if (target) hoveredIcon.value = target.dataset.icon;
    };

    // click to select icon
    let lastSelectedIcon = inject("last-selected-icon");

    let selectIcon = (ev, icon) => {
      // vendor last vendor
      // wywalic index
      let selectedIcons = icon
      if (ev.shiftKey && lastSelectedIcon.value) {
        if (lastSelectedIcon.value) {
          let from = icons.value.indexOf(lastSelectedIcon.value)
          let to = icons.value.indexOf(icon)
          if (to < from) [from, to] = [to, from]
          selectedIcons = icons.value.slice(from, to + 1)
        }
      }
      emit("selected-icon", selectedIcons);
    };

    return {
      emit,
      selectIcon,
      icons,
      handleMouseMove,
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
