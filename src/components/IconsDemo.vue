<template>
  <div class="overflow-y-auto" style="max-height: calc(100vh - 3em)">

    <!-- buttons -->

    <div class="flex items-end gap-x-6">
      <v-icon
        :name="store.currentIconDemo"
        class="h-16 w-16 text-gray-600 dark:text-gray-400"
      ></v-icon>
      <span class="text-3xl dark:text-gray-300">{{
        store.currentIconDemo.getIconName()
      }}</span>
    <v-button @click="isDemoActive = !isDemoActive">Close</v-button>
    </div>
    <v-collapse v-model="isDemoActive">
      <div class="flex items-center gap-x-6 mb-6 mt-10">
        <v-button>
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
          Button
        </v-button>
        <v-button style-button="secondary">
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
          Button
        </v-button>
        <v-button style-button="red small">
          <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
          Button
        </v-button>
        <v-button style-button="blue tiny">
          <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
          Button
        </v-button>
      </div>
      <div class="flex items-center gap-x-6 my-6">
        <v-button style-button="green">
          Button
          <v-icon :name="store.currentIconDemo" class="h-5 w-5 ml-2"></v-icon>
        </v-button>
        <v-button>
          <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
        </v-button>
      </div>
      
      <!-- small icons colors -->
      
      <div class="flex items-center gap-10 my-6">
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
      
      <div class="flex items-center gap-10 my-6">
        <div class="relative flex items-center">
          <v-icon
            :name="store.currentIconDemo"
            class="absolute h-6 w-6 text-gray-400 dark:text-gray-400 ml-2"
          ></v-icon>
          <v-input class="pl-10" placeholder="Search"></v-input>
        </div>
      </div>
      
      <!-- link -->
      
      <div class="flex items-center gap-10 my-6">
        <a href="" class="flex items-center text-blue-400 dark:text-blue-400">
        <v-icon
            class="mr-1"
          :name="store.currentIconDemo"
        ></v-icon>
          <span class="underline">Link</span>
        </a>
      </div>
      
      <!-- text -->
      
      <div class="my-6 w-8/12">
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
        <p class="my-1 text-gray-600 dark:text-gray-400 mt-4">
          <v-icon
            :name="store.currentIconDemo"
            class="h-12 w-12 float-left mr-2"
          ></v-icon>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </v-collapse>
  </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "../composition/useStore";

export default {
  props: {
    modelValue: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    let store = useStore();

    let isDemoActive = ref(false)

    return {
      store,
      isDemoActive,
    };
  },
};
</script>
