<template>
  <p class="dark:text-gray-400 pt-2 pb-5">
    <v-icon
      :name="store.currentIconDemo"
      class="h-12 w-12 float-left mr-2 text-gray-600 dark:text-gray-400"
    />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    <a
      href=""
      class="inline-flex items-center text-blue-400 dark:text-blue-400"
    >
      <v-icon class="h-4 w-4 mr-1" :name="store.currentIconDemo"></v-icon>
      <span class="underline">Lorem Ipsum</span></a
    >
    passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.
  </p>

  <div class="py-5">
    <v-alert v-model="alertModel" mod-alert="variant:info" class="my-2">
      <template #icon>
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
      </template>
      Info alert
    </v-alert>
    <v-alert v-model="alertModel" mod-alert="variant:warn" class="my-2">
      <template #icon>
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
      </template>
      Warning alert
    </v-alert>
    <v-alert v-model="alertModel" mod-alert="variant:danger" class="my-2">
      <template #icon>
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
      </template>
      Danger alert
    </v-alert>
  </div>

  <div class="py-5">
    <v-tabs>
      <v-tab name="Item one"></v-tab>
      <v-tab>
        <template #name>
          <div class="flex items-center">
            <v-icon :name="store.currentIconDemo" class="w-4 h-4 mr-2"></v-icon>
            Item two
          </div>
        </template>
      </v-tab>
      <v-tab name="Item three"></v-tab>
    </v-tabs>
  </div>

  <div class="py-5">
    <v-tabs base="materialTabs">
      <v-tab name="Item one"></v-tab>
      <v-tab>
        <template #name>
          <div class="flex items-center">
            <v-icon :name="store.currentIconDemo" class="w-4 h-4 mr-2"></v-icon>
            Item two
          </div>
        </template>
      </v-tab>
      <v-tab name="Item three"></v-tab>
    </v-tabs>
  </div>

  <div class="flex items-center gap-6 my-6">
    <v-input
      base="underlinedInput"
      placeholder="Search"
      :icon="store.currentIconDemo"
    ></v-input>

    <v-input
      base="roundedInput"
      placeholder="Search"
      :icon="store.currentIconDemo"
    ></v-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../composition/useStore";

let store = useStore();

let alertModel = ref(true);
</script>
