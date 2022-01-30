<template>
  <v-navbar
    sticky
    class="flex items-center text-gray-200 px-4 py-2 shadow-none h-12"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
  </v-navbar>

  <div class="flex w-full">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <!-- filter input -->
        <div v-if="store.isAnyVendorLoaded" class="flex items-end justify-center">
          <v-input
            type="search"
            v-model="filter"
            placeholder="Start typing to filter..."
            class="w-full mt-10"
          />
          <v-button
            style-button="primary-outline"
            class="ml-4"
            @click="filter = ''"
            >Clear</v-button
          >
        </div>

        <v-divider class="my-10"></v-divider>

        <!-- size and view options -->
        <div
          v-if="store.isAnyVendorLoaded"
          class="flex justify-end justify-items-end"
        >
          <div class="flex items-center">
            <label for="select-size" class="font-semibold mr-4">Size</label>
            <v-select id="select-size" v-model="store.size">
              <option :value="sizes.sm">Small</option>
              <option :value="sizes.md">Medium</option>
              <option :value="sizes.lg">Large</option>
            </v-select>
          </div>
          <div class="flex items-center ml-8">
            <label for="select-size" class="font-semibold mr-4">View</label>
            <v-select id="select-size" v-model="store.view">
              <option :value="views.stacked">Stacked</option>
              <option :value="views.columns">Columns</option>
            </v-select>
          </div>
        </div>

        <!-- icons -->

        <div v-if="!store.isAnyVendorLoaded" class="flex justify-center h-40">
          <div class="flex flex-col mt-auto">
            <p class="text-xl">
              No icon vendors loaded. Add icons to start browsing.
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('bootstrap')"
              >
                Add Bootstrap Icons.
              </a>
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('mdi')"
              >
                Add Material Design Icons.
              </a>
            </p>
            <p class="mt-8 mx-auto">
              <a
                class="text-lg text-blue-400 underline cursor-pointer"
                @click.prevent="toggleVendor('fontawesome')"
              >
                Add Font Awesome Icons.
              </a>
            </p>
          </div>
        </div>

        <div :class="store.view">
          <div>
            <header v-if="store.bootstrap.active">
              <div class="flex items-center w-full my-4 py-2">
              <v-icon :name="BBootstrapFill" class="h-8 w-8 text-purple-500 mr-2"></v-icon>
                Bootstrap Icons
              </div>
            </header>
            <icons-vendor-bootstrap
              v-if="store.bootstrap.active"
              vendor="bootstrap"
              @selected-icon="selectIcon"
              @bootstrap-loaded="store.bootstrap.loading = false"
            ></icons-vendor-bootstrap>
          </div>

          <div>
            <header v-if="store.mdi.active">
              <div class="flex items-center w-full my-4 py-2">
              <v-icon :name="MdiMaterialDesign" class="h-8 w-8 text-purple-500 mr-2"></v-icon>
                Material Design Icons
              </div>
            </header>
            <icons-vendor-mdi
              v-if="store.mdi.active"
              vendor="mdi"
              @selected-icon="selectIcon"
              @mdi-loaded="store.mdi.loading = false"
            ></icons-vendor-mdi>
          </div>

          <div>
            <header v-if="store.fontawesome.active">
              <div class="flex items-center w-full my-4 py-2">
              <v-icon :name="FaFontAwesomeFlagBrand" class="h-8 w-8 text-purple-500 mr-2"></v-icon>
                Font Awesome Icons
              </div>
            </header>
            <icons-vendor-fontawesome
              v-if="store.fontawesome.active"
              vendor="fontawesome"
              @selected-icon="selectIcon"
              @fontawesome-loaded="store.fontawesome.loading = false"
            ></icons-vendor-fontawesome>
          </div>
        </div>
      </div>
      <!-- <div class="fixed bottom-0 bg-white h-20 w-full p-10">{{ currentIcon &#38;&#38; currentIcon.getIconName() }} -->
      <!--   <component :is="currentIcon"></component> -->
      <!-- </div> -->
      <!-- <icons-bottom-bar :current-icon="currentIcon"></icons-bottom-bar> -->
    </div>

    <!-- sidepanel -->

    <icons-sidepanel
      :selected-icons="selectedIcons"
      @unselect-icon="unselectIcon"
      @clear-icon-list="clearSelected"
      @toggle-vendor="toggleVendor($event)"
    />
  </div>
</template>

<script>
import { ref, provide, defineAsyncComponent } from "vue";
import { useDebounce } from "@vueuse/core";
import { useStore } from "../composition/useStore";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSidepanel from "./IconsSidepanel.vue";
import { BBootstrapFill } from "../icons/dist-bootstrap"
import { MdiMaterialDesign } from "../icons/dist-mdi"
import { FaFontAwesomeFlagBrand } from "../icons/dist-fontawesome"
// import IconsBottomBar from "./IconsBottomBar.vue"

export default {
  components: {
    IconsVendorBootstrap: defineAsyncComponent({
      loader: () => import("./IconsVendorBootstrap.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsVendorMdi: defineAsyncComponent({
      loader: () => import("./IconsVendorMdi.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsVendorFontawesome: defineAsyncComponent({
      loader: () => import("./IconsVendorFontawesome.vue"),
      loadingComponent: LoadingProgress,
    }),
    IconsSidepanel,
    // IconsBottomBar,
  },
  setup() {
    let store = useStore();

    let sizes = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let views = {
      stacked: "",
      columns: "grid grid-flow-col space-x-4",
    };

    let filter = ref("");
    const debounced = useDebounce(filter, 200);

    store.$patch({
      size: sizes.sm,
      view: views.stacked,
      filter: debounced,
    })

    // selection

    let selectedIcons = ref([]);
    let lastSelectedIcon = ref({});
    let currentIcon = ref(null);

    let unselectIcon = (icon) => {
      let index = selectedIcons.value.findIndex((i) => {
        return icon.$_icon.name === i.$_icon.name;
      });
      selectedIcons.value.splice(index, 1);
      icon.selected.value = false;
      lastSelectedIcon.value = null;
    };

    let selectIcon = (icons) => {
      let isArray = Array.isArray(icons);

      if (!isArray && icons.selected.value) {
        unselectIcon(icons);
        return;
      }

      if (isArray) {
        icons.forEach((i) => {
          if (!i.selected.value) {
            selectedIcons.value.push(i);
            i.selected.value = true;
          }
        });
        lastSelectedIcon.value = icons[icons.length - 1];
        currentIcon.value = icons[0];
      } else {
        selectedIcons.value.push(icons);
        icons.selected.value = true;
        lastSelectedIcon.value = icons;
        currentIcon.value = icons;
      }
    };

    let clearSelected = () => {
      selectedIcons.value.forEach((i) => {
        i.selected.value = false;
      });
      selectedIcons.value = [];
    };

    // vendors
    let toggleVendor = (vendor) => {
      if (!store[vendor].active) store[vendor].loading = true;
      store[vendor].active = !store[vendor].active;
    };

    // provide for IconsVendor
    provide("last-selected-icon", lastSelectedIcon);

    return {
      filter,
      selectIcon,
      unselectIcon,
      debounced,
      selectedIcons,
      clearSelected,
      sizes,
      views,
      toggleVendor,
      store,
      currentIcon,
      BBootstrapFill,
      MdiMaterialDesign,
      FaFontAwesomeFlagBrand,
    };
  },
};
</script>

<style scoped>
svg {
  pointer-events: none;
}
header {
  @apply my-8 text-xl font-bold;
}
.sidebar {
  min-width: 400px;
}
.sidebar-icons {
  max-height: 75%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
