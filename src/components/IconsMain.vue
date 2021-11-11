<template>
  <icons-navbar :vendors="vendors"></icons-navbar>
  <div class="flex w-full">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <div class="flex divide-x max-w-max mt-10 ml-auto">
          <div class="text-center px-4">
            <v-button name="button-link" @click="toggleVendor('bootstrap')">
              <v-spinner
                v-if="vendors.bootstrap.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              <v-icon
                v-if="vendors.bootstrap.active && !vendors.bootstrap.loading"
                :name="BCheckLg"
                class="mr-2"
              ></v-icon>
              <v-icon
                v-if="!vendors.bootstrap.active && !vendors.bootstrap.loading"
                :name="BPlusLg"
                class="mr-2"
              ></v-icon>
              Bootstrap Icons
            </v-button>
          </div>
          <div class="text-center px-4">
            <v-button name="button-link" @click="toggleVendor('mdi')">
              <v-spinner
                v-if="vendors.mdi.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              <v-icon
                v-if="vendors.mdi.active && !vendors.mdi.loading"
                :name="BCheckLg"
                class="mr-2"
              ></v-icon>
              <v-icon
                v-if="!vendors.mdi.active && !vendors.mdi.loading"
                :name="BPlusLg"
                class="mr-2"
              ></v-icon>
              Material Design Icons
            </v-button>
          </div>
          <div class="text-center px-4">
            <v-button name="button-link" @click="toggleVendor('fontawesome')">
              <v-spinner
                v-if="vendors.fontawesome.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              <v-icon
                v-if="
                  vendors.fontawesome.active && !vendors.fontawesome.loading
                "
                :name="BCheckLg"
                class="mr-2"
              ></v-icon>
              <v-icon
                v-if="
                  !vendors.fontawesome.active && !vendors.fontawesome.loading
                "
                :name="BPlusLg"
                class="mr-2"
              ></v-icon>
              Font Awesome Icons
            </v-button>
          </div>
        </div>

        <!-- filter input -->
        <v-input
          v-if="isAnyVendorLoaded()"
          type="search"
          v-model="filter"
          placeholder="Start typing to filter..."
          class="w-full mt-10"
        />

        <v-divider class="my-10"></v-divider>

        <!-- icon size -->
        <div v-if="isAnyVendorLoaded()" class="flex">
          <div class="flex items-center ml-auto">
            <label for="select-size" class="font-semibold mr-4"
              >Icons size</label
            >
            <v-select id="select-size" v-model="size">
              <option :value="sizes.sm">Small</option>
              <option :value="sizes.md">Medium</option>
              <option :value="sizes.lg">Large</option>
            </v-select>
          </div>
        </div>

        <!-- icons -->

        <div class="flex justify-center">
          <p v-if="!isAnyVendorLoaded()" class="text-xl">
            No icon pack loaded. Add some icons to start browsing.
          </p>
        </div>

        <header v-if="vendors.bootstrap.active">
          <div class="w-full my-4 py-2">Bootstrap Icons</div>
        </header>
        <icons-vendor-bootstrap
          v-if="vendors.bootstrap.active"
          vendor="bootstrap"
          :filter="debounced"
          :size="size"
          @selected-icon="selectIcon"
          @bootstrap-loaded="vendors.bootstrap.loading = false"
        ></icons-vendor-bootstrap>

        <header v-if="vendors.mdi.active">
          <div class="w-full my-4 py-2">Material Design Icons</div>
        </header>
        <icons-vendor-mdi
          v-if="vendors.mdi.active"
          vendor="mdi"
          :filter="debounced"
          :size="size"
          @selected-icon="selectIcon"
          @mdi-loaded="vendors.mdi.loading = false"
        ></icons-vendor-mdi>

        <header v-if="vendors.fontawesome.active">
          <div class="w-full my-4 py-2">Font Awesome</div>
        </header>
        <icons-vendor-fontawesome
          v-if="vendors.fontawesome.active"
          vendor="fontawesome"
          :filter="debounced"
          :size="size"
          @selected-icon="selectIcon"
          @fontawesome-loaded="vendors.fontawesome.loading = false"
        ></icons-vendor-fontawesome>
      </div>

      <div class="fixed bottom-0 bg-gray-200 p-2">
        <div class="flex items-center">
          <!-- <icon -->
          <!--   :icon="currentIcon.name" -->
          <!--   class="h-10 w-10 m-1" -->
          <!-- ></icon> -->
          <span class="font-semibold ml-4">
            {{ currentIcon }}
          </span>
        </div>
      </div>
    </div>

    <icons-sidepanel
      :selected-icons="selectedIcons"
      @unselect-icon="unselectIcon"
      @clear-icon-list="clearSelected"
    />
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  inject,
  provide,
  defineAsyncComponent,
} from "vue";
import LoadingProgress from "./LoadingProgress.vue";
import IconsSidepanel from "./IconsSidepanel.vue";
import IconsNavbar from "./IconsNavbar.vue";
import { BCheckLg, BX, BXLg, BPlusLg } from "../icons/dist-bootstrap";
import { useDebounce } from "@vueuse/core";

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
    IconsNavbar,
    IconsSidepanel,
  },
  setup() {
    let icons = inject("icons");
    let tags = inject("tags");

    let vendors = reactive({
      bootstrap: {
        active: true,
        loading: false,
      },
      mdi: {
        active: false,
        loading: false,
      },
      fontawesome: {
        active: false,
        loading: false,
      },
    });

    let sizes = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let filter = ref("");
    const debounced = useDebounce(filter, 200);
    let size = ref(sizes.md);
    let currentIcon = ref({});

    // selection

    let selectedIcons = ref([]);
    let lastSelectedIcon = ref({});

    let unselectIcon = (icon) => {
      let index = selectedIcons.value.findIndex((i) => {
        return icon.name === i.name;
      });
      selectedIcons.value.splice(index, 1);
      icon.selected.value = false;
      lastSelectedIcon.value = null;
    };

    let selectIcon = (icons) => {
      let isArray = Array.isArray(icons)

      if (!isArray && icons.selected.value) {
        unselectIcon(icons);
        return;
      }

      if (isArray) {
        icons.forEach(i => {
          if (!i.selected.value) {
            selectedIcons.value.push(i)
            i.selected.value = true
          }
        })
        lastSelectedIcon.value = icons[icons.length - 1];
      } else {
        selectedIcons.value.push(icons);
        icons.selected.value = true;
        lastSelectedIcon.value = icons;
      }
    };

    let clearSelected = () => {
      selectedIcons.value.forEach((i) => {
        i.selected.value = false
      })
      selectedIcons.value = []
    }

    // vendor

    let isAnyVendorLoaded = () => {
      return (
        vendors.bootstrap.active ||
        vendors.mdi.active ||
        vendors.fontawesome.active
      );
    };

    let toggleVendor = (vendor) => {
      if (!vendors[vendor].active) vendors[vendor].loading = true;
      vendors[vendor].active = !vendors[vendor].active;
    };

    // provide for IconsVendor
    provide("hovered-icon", currentIcon);
    // provide for IconsVendor
    provide("last-selected-icon", lastSelectedIcon);

    return {
      icons,
      filter,
      currentIcon,
      selectIcon,
      unselectIcon,
      debounced,
      selectedIcons,
      clearSelected,
      size,
      sizes,
      vendors,
      isAnyVendorLoaded,
      toggleVendor,
      BCheckLg,
      BPlusLg,
    };
  },
};
</script>

<style scoped>
svg {
  pointer-events: none;
}
header {
  @apply my-10 text-3xl font-bold;
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
