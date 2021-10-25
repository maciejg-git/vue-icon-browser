<template>
  <div
    class="
      sidebar
      sticky
      bg-gray-50
      border-l
      top-12
      overflow-y-auto
      pt-4
    "
  >
    <div class="sidebar-icons w-full">
      <ul>
        <transition-group name="fade">
          <li
            v-for="i in selectedIcons"
            :key="i.icon.name"
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
                <transition name="fade-icon" mode="out-in">
                  <v-icon
                    v-if="!i.copied.value"
                    :name="MdiContentCopy"
                    class="text-gray-700 mr-2"
                  ></v-icon>
                  <v-icon
                    v-else
                    :name="MdiCheckBold"
                    class="text-gray-700 mr-2"
                  ></v-icon>
                </transition>
              </button>
              <v-close-button
                class="mr-2"
                @click="emit('unselect-icon', i.icon)"
              ></v-close-button>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>

    <div v-if="selectedIcons.length">
      <div class="flex justify-end">
        <v-button style-button="primary-outline" class="mt-4 mr-4 text-right">Clear all</v-button>
      </div>
      
      <v-divider class="mx-auto w-11/12 my-4" />
      
      <!-- clipboard -->

      <div>
        <div class="m-4">
          <v-textarea
            v-model="selectedCopyList"
            rows="6"
            class="w-full"
          ></v-textarea>
          <div class="flex">
            <v-icon
              :name="MdiContentCopy"
              class="text-gray-700 mr-2 ml-auto"
            ></v-icon>
          </div>
        </div>
      </div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-icon-enter-active,
.fade-icon-leave-active {
  transition: opacity 0.2s ease;
}
.fade-icon-enter-from,
.fade-icon-leave-to {
  opacity: 0;
}
</style>
