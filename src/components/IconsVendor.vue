<template>
  <div>
    <div v-show="!filter">
      <div @mouseover="handleMouseMove">
        <template v-for="(icon, index) in icons">
          <div
            class="
              icon-browser
              inline-block
              cursor-pointer
              bg-gray-100
              hover:bg-indigo-100
              rounded-md
              p-2
              m-2
            "
            :data-icon="icon.vendor + icon.name"
            @click="selectIcon(icon)"
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
    <template v-if="filter">
      <div v-if="Object.keys(filteredIcons).length == 0" class="flex">
        <span class="mx-auto text-lg">
          Nothing found for current filter.
        </span>
      </div>
      <div @mouseover="handleMouseMove">
        <template v-for="(icon, index) in filteredIcons">
          <div
            class="
              icon-browser
              inline-block
              cursor-pointer
              bg-gray-100
              rounded-md
              p-2
              m-2
            "
            :data-icon="icon.vendor + icon.name"
            @click="selectIcon(icon)"
          >
            <component
              :is="icon"
              class="icon-browser"
              :class="[size, { 'icon--selected': icon.selected.value }]"
            ></component>
          </div>
        </template>
      </div>
    </template>
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
    let tags = {};

    for (let icon in props.icons) {
      for (let tag of props.icons[icon].tags) {
        if (!tags[tag]) tags[tag] = [];
        tags[tag].push(props.icons[icon]);
      }
    }
    tags = Object.entries(tags);

    // filter icons

    let filteredIcons = computed(() => {
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
      return res;
    });

    // hover icon

    let hoveredIcon = inject("hovered-icon");

    let handleMouseMove = (ev) => {
      let target = ev.target;
      if (target) hoveredIcon.value = target.dataset.icon;
    };

    // select icon

    let selectIcon = (icon) => {
      emit("selected-icon", icon);
    };

    return {
      emit,
      selectIcon,
      filteredIcons,
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
