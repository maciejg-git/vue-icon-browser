<template>
  <div
    class="sidebar sticky flex flex-col border-l top-14 overflow-y-auto pt-4"
  >
    <div class="sidebar-icons w-full">
      <ul>
        <li
          v-for="i in selectedIcons"
          class="flex justify-between hover:bg-gray-100 px-2 py-1"
        >
          <div class="flex items-center">
            <v-icon
              :name="i.icon"
              class="inline-block icon-standalone my-1 mr-1 ml-4"
            ></v-icon>
            <div class="font-semibold ml-2">
              {{ i.icon.vendor + i.icon.name }}
            </div>
          </div>
          <div class="flex items-center">
            <button @click="copyToClipboard(i)">
              <v-icon
                v-if="!i.copied.value"
                :name="MdiContentCopy"
                class="text-gray-700 mr-2"
              ></v-icon>
              <v-icon
                v-if="i.copied.value"
                :name="MdiCheckBold"
                class="text-gray-700 mr-2"
              ></v-icon>
            </button>
            <v-close-button
              class="mr-2"
              @click="emit('unselect-icon', i.icon)"
            ></v-close-button>
          </div>
        </li>
      </ul>
    </div>
    <header class="font-bold px-4 my-4">Copy to clipboard</header>
    <div class="m-4">
      <v-textarea
        v-model="selectedCopyList"
        rows="6"
        class="w-full"
      ></v-textarea>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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
    selectedCopyList: { type: [String] },
  },
  setup(props, { emit }) {
    let copyStatus = ref(false);

    let copyToClipboard = (i) => {
      navigator.clipboard.writeText(i.icon.vendor + i.icon.name).then(
        function () {
          i.copied.value = true;
          setTimeout(() => {
            i.copied.value = false;
          }, 1500);
        },
        function () {}
      );
    };

    let selectedIcons = computed(() => {
      return props.selectedIcons.map((i) => {
        return { icon: i, copied: ref(false) };
      });
    });
    console.log(selectedIcons);

    return {
      selectedIcons,
      emit,
      copyToClipboard,
      copyStatus,
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
  max-height: calc(100vh - 3.5em);
  min-height: calc(100vh - 3.5em);
}
.sidebar::-webkit-scrollbar {
  width: 0.5em;
}
.sidebar::-webkit-scrollbar-track {
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.sidebar-icons {
  /* max-height: 75%; */
}
</style>
