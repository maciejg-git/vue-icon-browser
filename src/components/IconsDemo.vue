<template>
  <div class="overflow-y-auto mt-6 px-1" style="max-height: calc(100vh - 5em)">
    <!-- buttons -->

    <div class="flex items-end gap-x-5">
      <v-icon
        :name="store.currentIconDemo"
        class="h-16 w-16 text-gray-600 dark:text-gray-400"
      ></v-icon>
      <span class="text-3xl dark:text-gray-300">{{
        store.currentIconDemo.getIconName()
      }}</span>
      <v-button name="button-link" @click="handleClickClosebutton">
        <v-close-button></v-close-button>
      </v-button>
    </div>

    <div class="flex items-center gap-x-5 mb-5 mt-10">
      <v-button>
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="secondary">
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="red small">
        <v-icon :name="store.currentIconDemo" class="h-4 w-4 mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="blue tiny">
        <v-icon :name="store.currentIconDemo" class="h-4 w-4 mr-2"></v-icon>
        Button
      </v-button>
    </div>

    <div class="flex items-center gap-x-5 my-5">
      <v-button style-button="green">
        Button
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 ml-2"></v-icon>
      </v-button>
      <v-button style-button="equal">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
    </div>
    <div class="flex items-center gap-x-6 my-6">
      <v-button style-button="circle blue">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
    </div>

    <!-- small icons colors -->

    <div class="flex items-center gap-10 my-5">
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

    <div class="flex items-center gap-5 my-5">
      <div class="relative flex items-center">
        <v-icon
          :name="store.currentIconDemo"
          class="absolute h-6 w-6 text-gray-400 dark:text-gray-400 ml-2"
        ></v-icon>
        <v-input class="pl-10" placeholder="Search"></v-input>
      </div>
    </div>

    <!-- <div class="flex items-center gap-6 my-6"> -->
    <!--   <div class="relative flex items-center"> -->
    <!--     <v-icon -->
    <!--       :name="store.currentIconDemo" -->
    <!--       class="absolute h-6 w-6 text-gray-400 dark:text-gray-400 ml-2" -->
    <!--     ></v-icon> -->
    <!--     <v-input name="input-underline" class="pl-10" placeholder="Search"></v-input> -->
    <!--   </div> -->
    <!-- </div> -->

    <!-- link -->

    <div class="flex items-center gap-10 my-5">
      <a href="" class="flex items-center text-blue-400 dark:text-blue-400">
        <v-icon class="mr-1" :name="store.currentIconDemo"></v-icon>
        <span class="underline">Link</span>
      </a>
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
    <v-button style-button="small" @click="isExtendedDemoActive = true">
      Show more
    </v-button>
    </div>

    <v-tabs name="tabs-material">
      <v-tab name="Native"></v-tab>
      <v-tab name="Vue"></v-tab>
      <v-tab name="SVG"></v-tab>
    </v-tabs>
  </div>

  <v-modal 
    v-model="isExtendedDemoActive"
    no-primary-button
    secondary-button-close
    >
    <div class="py-4">
      <v-alert v-model="alertModel" style-alert="info">
        <template #icon>
          <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        </template>
        Alert
      </v-alert>
    </div>

    <p class="dark:text-gray-400 py-4">
      <v-icon
        :name="store.currentIconDemo"
        class="h-12 w-12 float-left mr-2 text-gray-600 dark:text-gray-400"
      ></v-icon>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </v-modal>
</template>

<script>
import { ref } from "vue";
import { useStore } from "../composition/useStore";

export default {
  props: {
    modelValue: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    let store = useStore();

    let isDemoActive = ref(false);

    let isExtendedDemoActive = ref(false);

    let alertModel = ref(true);

    let handleClickClosebutton = () => {
      emit("unselect-icon", store.currentIconDemo);
    };

    return {
      store,
      isDemoActive,
      isExtendedDemoActive,
      alertModel,
      handleClickClosebutton,
    };
  },
};
</script>
