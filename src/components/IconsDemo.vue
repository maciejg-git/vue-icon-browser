<template>
  <div
    class="demo overflow-y-auto overflow-x-hidden mt-6 px-10 max-w-[470px] min-w-[470px]"
    style="max-height: calc(100vh - 6em)"
  >
    <!-- demo header -->

    <div class="flex items-end gap-x-5 mb-10">
      <v-icon
        :name="store.currentIconDemo"
        class="h-16 w-16 text-gray-600 dark:text-gray-400"
      ></v-icon>
      <div class="overflow-hidden text-ellipsis leading-10 text-3xl text-gray-600 dark:text-gray-400">
        {{ store.currentIconDemo.getIconName() }}
      </div>
    </div>

    <!-- buttons -->

    <div class="demo-section">
      <v-button>
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="secondary">
        Button
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 ml-2"></v-icon>
      </v-button>
    </div>

    <div class="demo-section">
      <v-button style-button="circle">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
      <v-button style-button="equal secondary">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
      <v-button style-button="pill danger">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
      </v-button>
    </div>

    <!-- buttons second row -->

    <div class="demo-section">
      <v-button base="plain" class="font-semibold text-lg">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
      </v-button>
      <v-icon
        :name="store.currentIconDemo"
        class="h-6 w-6 text-blue-400 dark:text-blue-400"
      ></v-icon>
      <v-icon
        :name="store.currentIconDemo"
        class="h-6 w-6 text-green-400 dark:text-green-400"
      ></v-icon>
      <v-icon
        :name="store.currentIconDemo"
        class="h-6 w-6 text-red-400 dark:text-red-400"
      ></v-icon>
      <v-icon
        :name="store.currentIconDemo"
        class="h-6 w-6 text-gray-400 dark:text-gray-400"
      ></v-icon>
    </div>

    <!-- input -->

    <div class="demo-section">
      <div class="relative flex items-center">
        <v-input placeholder="Search" :icon="store.currentIconDemo"></v-input>
      </div>
    </div>

    <!-- text -->

    <div class="flex justify-between items-end my-5">
      <div>
        <h1
          class="flex items-center text-3xl text-gray-600 dark:text-gray-400 gap-x-2 my-1"
        >
          <v-icon :name="store.currentIconDemo" class="h-8 w-8"></v-icon>
          Heading 1
        </h1>
        <h2
          class="flex items-center text-xl text-gray-600 dark:text-gray-400 gap-x-2 my-1"
        >
          <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
          Heading 2
        </h2>
      </div>

      <!-- show more button -->

      <v-button
        style-button="primary-outline small"
        @click="isExtendedDemoActive = true"
      >
        Show more
      </v-button>
    </div>

    <!-- usage tabs -->

    <div class="mt-20">
      <icons-demo-tabs />
    </div>
  </div>

  <!-- extended demo -->

  <v-modal
    v-model="isExtendedDemoActive"
    :title="store.currentIconDemo.getIconName()"
    no-primary-button
    secondary-button-close
    transition="fade"
  >
    <icons-demo-extended />
  </v-modal>
</template>

<script>
import { ref } from "vue";
import IconsDemoExtended from "./IconsDemoExtended.vue";
import IconsDemoTabs from "./IconsDemoTabs.vue";
import { useStore } from "../composition/useStore";

export default {
  components: {
    IconsDemoExtended,
    IconsDemoTabs,
  },
  setup() {
    let store = useStore();

    let isExtendedDemoActive = ref(false);

    return {
      store,
      isExtendedDemoActive,
    };
  },
};
</script>

<style scoped>
.demo-section {
  @apply flex items-center gap-x-4 my-8;
}
.demo {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.demo::-webkit-scrollbar {
  display: none;
}
</style>
