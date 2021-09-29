<template>
  <div>
    <div v-show="!filter">
      <div @mouseover="handleMouseMove">
        <template v-for="(icon, index) in icons">
          <div
            class="inline cursor-pointer transform hover:translate-y-1"
            :data-icon="index"
            @click="selectIcon(icon)"
          >
            <component :is="icon" :class="[size, { 'icon--selected': icon.selected.value }, 'hover:text-indigo-500']"></component>
          </div>
        </template>
      </div>
    </div>
    <template v-if="filter">
      <template v-for="icon in filteredIcons">
        <div
          class="inline cursor-pointer"
          :class="{ 'icon--selected': icon.selected.value }"
          :data-icon="icon.index"
          @click="selectIcon(icon)"
        >
            <component :is="icon" :class="[size, { 'icon--selected': icon.selected.value }, 'hover:text-indigo-500']"></component>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { computed, onMounted } from "vue"

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
    tags = Object.entries(tags)

    let filteredIcons = computed(() => {
      let filter = props.filter
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
    })

    let handleMouseMove = (ev) => {
      let target = ev.target;
      emit('icon-hover', target.dataset.icon)
    };

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
}
header {
  @apply my-10 text-2xl font-bold;
}
</style>
