<template>
  <div class="sidebar sticky bg-gray-50 border-l top-12 overflow-y-auto">
    <div class="px-4 py-4">
      <div v-if="sidepanelState == 'icons'" class="flex">
        <span class="text-lg font-semibold">
          Icon list
        </span>
        <v-button
          name="button-link"
          class="ml-auto"
          @click="sidepanelState = 'settings'"
        >
          <v-icon :name="BGear" class="h-6 w-6"></v-icon>
        </v-button>
      </div>
      <div v-else class="flex">
         <v-button name="button-link" @click="sidepanelState = 'icons'">
          <v-icon :name="MdiArrowLeft" class="h-6 w-6"></v-icon>
        </v-button>
        <span class="text-lg font-semibold ml-auto">
          Settings
        </span>
      </div>
    </div>

    <v-divider />

    <div class="my-4">
      <transition name="fade" mode="out-in">
        <!-- settings -->
      
        <div v-if="sidepanelState == 'settings'">
          <icons-settings />
        </div>
      
        <!-- icons   -->
      
        <div v-else-if="selectedIcons.length">
          <div class="w-full">
            <ul class="mx-1">
              <transition-group name="fade-icon">
                <li
                  v-for="i in selectedIcons"
                  :key="i.icon.name"
                  class="flex justify-between hover:bg-gray-100 py-1"
                >
                  <div class="flex items-center">
                    <v-icon
                      :name="i.icon"
                      class="inline-block icon-standalone my-1 mr-1 ml-4"
                    ></v-icon>
                    <div class="font-semibold ml-2">
                      <!-- {{ i.icon.vendor + i.icon.name }} -->
                      {{ i.icon.getIconName() }}
                    </div>
                  </div>
                  <div class="flex items-center">
                    <button @click="copyIconToClipboard(i)">
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
      
          <div class="flex justify-end">
            <v-button style-button="primary-outline small" class="mt-4 mr-4 text-right" @click="clearIconList">
              Clear all
            </v-button>
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
                    <button @click="copyAllToClipboard(i)">
                      <transition name="fade-icon" mode="out-in">
                        <v-icon
                          v-if="!listCopied"
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
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import IconsSettings from "./IconsSettings.vue";
import useSettings from "../composition/use-settings";
import {
  MdiContentCopy,
  MdiCheckboxOutline,
  MdiCheckboxBlankOutline,
  MdiCheckBold,
  MdiMenu,
  MdiArrowLeft,
} from "../icons/dist-mdi";
import { BGear } from "../icons/dist-bootstrap";

export default {
  props: {
    selectedIcons: { type: [Array, Object] },
  },
  components: {
    IconsSettings,
  },
  setup(props, { emit }) {
    let settings = useSettings();

    let sidepanelState = ref("icons");
    let selectedCopyList = ref("");
    let listCopied = ref(false)

    // local list of selected icons

    let selectedIcons = computed(() => {
      return props.selectedIcons.map((i) => {
        return {
          icon: i,
          copied: ref(false),
        };
      });
    });

    // update selected icons list string

    watch(
      [selectedIcons, () => settings.kebabCase, () => settings.vendorPrefix],
      () => {
        updateCopyList();
      }
    );

    let updateCopyList = () => {
      selectedCopyList.value = props.selectedIcons
        .map((i) => i.getIconName())
        .join(",")
        .replace(/,/g, ",\n");
    };

    // copy to clipboard

    let copyIconToClipboard = (i) => {
      console.log(i)
      navigator.clipboard.writeText(i.icon.getIconName()).then(
        function () {
          i.copied.value = true;
          setTimeout(() => {
            i.copied.value = false;
          }, 1500);
        },
        function () {}
      );
    };

    let copyAllToClipboard = (i) => {
      navigator.clipboard.writeText(selectedCopyList.value).then(
        function () {
          listCopied.value = true;
          setTimeout(() => {
            listCopied.value = false;
          }, 1500);
        },
        function () {}
      );
    };

    let clearIconList = () => {
      emit("clear-icon-list")
    }

    return {
      sidepanelState,
      selectedIcons,
      emit,
      copyIconToClipboard,
      copyAllToClipboard,
      selectedCopyList,
      clearIconList,
      listCopied,
      MdiContentCopy,
      MdiCheckboxOutline,
      MdiCheckboxBlankOutline,
      MdiCheckBold,
      MdiMenu,
      MdiArrowLeft,
      BGear,
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
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
