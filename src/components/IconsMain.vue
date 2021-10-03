<template>
  <v-navbar
    sticky
    class="flex items-center text-gray-200 px-4 py-1 shadow-none"
  >
    <v-button name="button-link" @click="sidepanel = !sidepanel"
      ><v-icon :name="MdiMenu" class="v-icon--lg"></v-icon
    ></v-button>

    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
  </v-navbar>
  <div class="flex w-full">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <v-sidepanel
          v-model="sidepanel"
          sidebar-left
          width="360px"
          class="px-4"
        >
          <span class="font-bold"> Add icons </span>
          <div class="flex items-center mt-2">
            <v-icon
              v-if="vendors.bootstrap.active && !vendors.bootstrap.loading"
              :name="MdiCheckBold"
              class="text-indigo-500 mr-1"
            ></v-icon>
            Bootstrap Icons
            <v-button
              style-button="small"
              @click="toggleVendor('bootstrap')"
              class="ml-auto"
            >
              <v-spinner
                v-if="vendors.bootstrap.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              {{ !vendors.bootstrap.active ? "Add" : "Remove" }}
            </v-button>
          </div>
          <div class="flex items-center mt-2">
            <v-icon
              v-if="vendors.mdi.active && !vendors.mdi.loading"
              :name="MdiCheckBold"
              class="text-indigo-500 mr-1"
            ></v-icon>
            Material Design Icons
            <v-button
              style-button="small"
              @click="toggleVendor('mdi')"
              class="ml-auto"
            >
              <v-spinner
                v-if="vendors.mdi.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              {{ !vendors.mdi.active ? "Add" : "Remove" }}
            </v-button>
          </div>
          <div class="flex items-center mt-2">
            <v-icon
              v-if="vendors.fontawesome.active && !vendors.fontawesome.loading"
              :name="MdiCheckBold"
              class="text-indigo-500 mr-1"
            ></v-icon>
            Font Awesome Icons
            <v-button
              style-button="small"
              @click="toggleVendor('fontawesome')"
              class="ml-auto"
            >
              <v-spinner
                v-if="vendors.fontawesome.loading"
                style-spinner="secondary small"
                class="mr-2"
              ></v-spinner>
              {{ !vendors.fontawesome.active ? "Add" : "Remove" }}
            </v-button>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="flex items-center">
            <label for="select-size" class="mr-4">Icons size</label>
            <v-select id="select-size" v-model="size" class="ml-auto">
              <option :value="sizes.sm">Small</option>
              <option :value="sizes.md">Medium</option>
              <option :value="sizes.lg">Large</option>
            </v-select>
          </div>
        </v-sidepanel>

        <div class="flex items-center mt-10">
          <v-input
            type="search"
            v-model="filter"
            placeholder="Start typing to filter..."
            class="w-full"
          />
        </div>

        <v-divider class="my-10"></v-divider>

        <!-- icons -->

        <transition-group name="fade">
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
        </transition-group>

        <header v-if="vendors.mdi.active">
          <div class="w-full my-4 py-2">Material Design Icons</div>
        </header>
        <transition name="fade">
          <icons-vendor-mdi
            v-if="vendors.mdi.active"
            vendor="mdi"
            :filter="debounced"
            :size="size"
            @selected-icon="selectIcon"
            @mdi-loaded="vendors.mdi.loading = false"
          ></icons-vendor-mdi>
        </transition>

        <header v-if="vendors.fontawesome.active">
          <div class="w-full my-4 py-2">Font Awesome</div>
        </header>
        <transition name="fade">
          <icons-vendor-fontawesome
            v-if="vendors.fontawesome.active"
            vendor="fontawesome"
            :filter="debounced"
            :size="size"
            @selected-icon="selectIcon"
            @fontawesome-loaded="vendors.fontawesome.loading = false"
          ></icons-vendor-fontawesome>
        </transition>
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

    <!-- sidepanel -->

    <div
      class="
        sidebar
        sticky
        flex
        flex-col
        bg-gray-50
        top-12
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
            class="
              flex
              justify-between
              items-center
              hover:bg-gray-100
              px-2
              py-1
            "
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
                @click="unselectIcon(icon)"
              ></v-close-button>
            </span>
          </li>
        </ul>
      </div>
      <div class="m-4">
        <v-textarea v-model="selectedCopyList" class="w-full"></v-textarea>
      </div>
    </div>
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
import { useDebounce } from "@vueuse/core";
import {
  MdiContentCopy,
  MdiCheckboxOutline,
  MdiCheckboxBlankOutline,
  MdiCheckBold,
  MdiMenu,
} from "../icons/dist-mdi";
import { BCheckLg, BX, BXLg } from "../icons/dist-bootstrap";

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
  },
  setup() {
    let icons = inject("icons");
    let tags = inject("tags");

    let vendors = reactive({
      bootstrap: {
        active: false,
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

    let sidepanel = ref(false);

    let filter = ref("");
    const debounced = useDebounce(filter, 200);

    let sizes = {
      sm: "h-6 w-6 m-2",
      md: "h-10 w-10 m-2",
      lg: "h-14 w-14 m-3",
    };

    let size = ref(sizes.md);

    let currentIcon = ref({});
    let currentVendor = ref("");

    let selectedIcons = ref([]);

    let unselectIcon = (icon) => {
      let index = selectedIcons.value.findIndex((i) => {
        return icon.name === i.name;
      });
      selectedIcons.value.splice(index, 1);
      icon.selected.value = false;
    };

    let selectIcon = (icon) => {
      if (icon.selected.value) {
        unselectIcon(icon);
        selectedCopyList.value = selectedIcons.value.map(i => i.vendor + i.name).join(",").replace(/,/g, ",\n")
        return;
      }
      selectedIcons.value.push(icon);
      icon.selected.value = true;
      selectedCopyList.value = selectedIcons.value.map(i => i.vendor + i.name).join(",").replace(/,/g, ",\n")
    };

    let toggleVendor = (vendor) => {
      if (!vendors[vendor].active) vendors[vendor].loading = true;
      vendors[vendor].active = !vendors[vendor].active;
    };

    let selectedCopyList = ref("")

    provide("hovered-icon", currentIcon);

    return {
      icons,
      filter,
      currentIcon,
      currentVendor,
      selectIcon,
      unselectIcon,
      debounced,
      selectedIcons,
      selectedCopyList,
      size,
      sizes,
      vendors,
      toggleVendor,
      sidepanel,
      // icons
      MdiContentCopy,
      BCheckLg,
      MdiCheckboxOutline,
      MdiCheckboxBlankOutline,
      MdiCheckBold,
      MdiMenu,
      BX,
      BXLg,
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
