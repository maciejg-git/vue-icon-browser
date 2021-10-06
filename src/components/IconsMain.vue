<template>
  <icons-navbar :vendors="vendors"></icons-navbar>
  <div class="flex w-full">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <div class="flex">
          <div class="flex items-center ml-auto mt-10">
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
        <v-input
          v-if="isAnyVendorLoaded()"
          type="search"
          v-model="filter"
          placeholder="Start typing to filter..."
          class="w-full mt-10"
        />

        <v-divider class="my-10"></v-divider>

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
      :selected-copy-list="selectedCopyList"
      @unselect-icon="unselectIcon"
    ></icons-sidepanel>
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
      updateCopyList(icon);
      icon.selected.value = false;
    };

    let updateCopyList = (i) => {
      selectedCopyList.value = selectedIcons.value
        .map((i) => i.vendor + i.name)
        .join(",")
        .replace(/,/g, ",\n");
    };

    let selectIcon = (icon) => {
      if (icon.selected.value) {
        unselectIcon(icon);
        return;
      }
      selectedIcons.value.push(icon);
      updateCopyList(icon);
      icon.selected.value = true;
    };

    let isAnyVendorLoaded = () => {
      return (
        vendors.bootstrap.active ||
        vendors.mdi.active ||
        vendors.fontawesome.active
      );
    };

    let selectedCopyList = ref("");

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
      sidepanel,
      isAnyVendorLoaded,
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
