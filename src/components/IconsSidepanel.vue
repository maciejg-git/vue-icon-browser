<template>
  <div
    class="
      sidebar
      sticky
      flex flex-col
      border-l
      top-14
      max-h-screen
      min-h-screen
      overflow-y-auto
      pt-4
    "
  >
    <div class="sidebar-icons w-full overflow-y-auto">
      <ul>
        <li
          v-for="icon in selectedIcons"
          class="flex justify-between items-center hover:bg-gray-100 px-2 py-1"
        >
          <span>
            <v-icon
              :name="icon"
              class="inline-block icon-standalone m-1 ml-4"
            ></v-icon>
            <span class="font-semibold ml-2">
              {{ icon.vendor + icon.name }}
            </span>
          </span>
          <span>
            <button>
              <v-icon :name="MdiContentCopy" class="mr-2"></v-icon>
            </button>
            <v-close-button
              class="mr-2"
              @click="emit('unselect-icon', icon)"
            ></v-close-button>
          </span>
        </li>
      </ul>
    </div>
    <div class="m-4">
      <v-textarea v-model="selectedCopyList" class="w-full"></v-textarea>
    </div>
  </div>
</template>

<script>
import {
  MdiContentCopy,
  MdiCheckboxOutline,
  MdiCheckboxBlankOutline,
  MdiCheckBold,
  MdiMenu,
} from "../icons/dist-mdi";

export default {
  props: {
    selectedIcons: { type: [Array, Object] },
    selectedCopyList: { type: [Array, Object] },
  },
  setup(props, { emit }) {
    return {
      emit,
      MdiContentCopy,
      MdiCheckboxOutline,
      MdiCheckboxBlankOutline,
      MdiCheckBold,
      MdiMenu,
    };
  },
};
</script>

<style scoped>
.sidebar {
  min-width: 400px;
}
.sidebar-icons {
  max-height: 75%;
}
</style>
