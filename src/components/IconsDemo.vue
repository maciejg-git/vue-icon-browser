<template>
  <div
    class="demo overflow-y-auto overflow-x-hidden mt-6 px-10 max-w-[470px] min-w-[470px]"
    style="max-height: calc(100vh - 14rem)"
  >
    <v-close-button class="absolute right-4" @click="store.currentIconDemo = null"></v-close-button>
    <!-- demo header -->

    <div class="flex items-end gap-x-5 mb-10">
      <v-icon
        :name="store.currentIconDemo"
        class="h-16 w-16 text-gray-600 dark:text-gray-400"
      ></v-icon>
      <div
        class="overflow-hidden text-ellipsis leading-10 text-3xl text-gray-600 dark:text-gray-400"
      >
        {{ store.currentIconDemo.getIconName() }}
      </div>
    </div>

    <!-- buttons -->

    <div class="flex flex-col gap-y-4">
      <div class="flex items-center gap-x-4">
        <v-button>
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
          Button
        </v-button>
        <v-button mod-button="variant:secondary">
          Button
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 ml-2"></v-icon>
        </v-button>
        <v-button mod-button="variant:secondaryOutline">
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
          Button
        </v-button>
      </div>
      <div class="flex items-center gap-x-4">
        <v-button mod-button="special:circle">
          <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
        </v-button>
        <v-button mod-button="shape:circle variant:danger">
          <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
          Button
        </v-button>
        <v-button mod-button="preset:plain" class="font-semibold text-lg">
          <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
          Button
        </v-button>
      </div>
    </div>

    <!-- input -->

    <div class="flex items-center gap-x-4 my-10">
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
        mod-button="variant:primaryOutline size:small"
        @click="isExtendedDemoActive = true"
      >
        Show more
      </v-button>
    </div>

    <!-- usage tabs -->

    <v-divider class="my-12"></v-divider>

    <icons-demo-tabs />
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

<script setup>
import { ref } from "vue";
import IconsDemoExtended from "./IconsDemoExtended.vue";
import IconsDemoTabs from "./IconsDemoTabs.vue";
import { useStore } from "../composition/useStore";

let store = useStore();

let isExtendedDemoActive = ref(false);
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
