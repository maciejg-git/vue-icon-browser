<template>
  <div class="flex w-full">
    <div class="flex-1">
      <div class="w-11/12 mx-auto">
        <div class="flex mt-10">
          <div class="flex gap-x-2">
            <v-button @click="toggleVendor('bootstrap')">
              <v-spinner
                v-if="vendors.bootstrap.loading"
                style-spinner="small gray"
              ></v-spinner>
              Load Bootstrap Icons
            </v-button>
            <v-button @click="toggleVendor('mdi')"
              ><v-spinner
                v-if="vendors.mdi.loading"
                style-spinner="small gray"
              ></v-spinner>
              Load MDI</v-button
            >
            <v-button>Load Font Awesome</v-button>
          </div>

          <div class="ml-auto">
            <label for="select-size" class="mr-4">Icons size</label>
            <v-select id="select-size" v-model="size">
              <option :value="sizes.sm">Small</option>
              <option :value="sizes.md">Medium</option>
              <option :value="sizes.lg">Large</option>
            </v-select>
          </div>
        </div>

        <div>
          <v-input
            type="text"
            v-model="filter"
            placeholder="Start typing to filter..."
            class="w-80 my-10"
          />
        </div>

        <hr>

        <!-- icons -->

        <transition-group name="fade">
          <header v-if="vendors.bootstrap.active">
            <div class="w-full px-2 my-4 py-2">
              Bootstrap Icons
            </div>
          </header>
          <icons-vendor-bootstrap
            v-if="vendors.bootstrap.active"
            vendor="bootstrap"
            :filter="debounced"
            :size="size"
            @selected-icon="selectIcon"
            @icon-hover="handleIconHover"
            @bootstrap-loaded="vendors.bootstrap.loading = false"
          ></icons-vendor-bootstrap>
        </transition-group>

        <header v-if="vendors.mdi.active">
          <div class="w-full px-2 my-4 py-2">
            Material Design Icons
          </div>
        </header>
        <transition name="fade">
          <icons-vendor-mdi
            v-if="vendors.mdi.active"
            vendor="mdi"
            :filter="debounced"
            :size="size"
            @selected-icon="selectIcon"
            @icon-hover="handleIconHover"
            @mdi-loaded="vendors.mdi.loading = false"
          ></icons-vendor-mdi>
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
        border-l
        bg-gray-50
        top-0
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
              <icon :icon="icon" class="inline-block h-6 w-6 m-1 ml-4"></icon>
              <span class="font-semibold ml-2">
                {{ icon.vendor + icon.name }}
              </span>
            </span>
            <span>
              <button>
                <icon :icon="MdiContentCopy" class="mr-2"></icon>
              </button>
              <v-close-button></v-close-button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, inject, defineAsyncComponent } from "vue";
import LoadingProgress from "./LoadingProgress.vue";
import { useDebounce } from "@vueuse/core";
import { MdiContentCopy } from "../icons/dist-mdi";

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
    });

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

    let selectIcon = (icon) => {
      console.log(icon);
      if (icon.selected.value) {
        let index = selectedIcons.value.findIndex((i) => {
          return icon.name === i.name;
        });
        selectedIcons.value.splice(index, 1);
        icon.selected.value = false;
        return;
      }
      selectedIcons.value.push(icon);
      icon.selected.value = true;
    };

    let toggleVendor = (vendor) => {
      if (!vendors[vendor].active) vendors[vendor].loading = true;
      vendors[vendor].active = !vendors[vendor].active;
    };

    let handleIconHover = (icon) => {
      if (icon) {
        currentIcon.value = icon;
      }
    };

    return {
      icons,
      filter,
      currentIcon,
      currentVendor,
      selectIcon,
      debounced,
      selectedIcons,
      size,
      sizes,
      vendors,
      toggleVendor,
      handleIconHover,
      MdiContentCopy,
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
