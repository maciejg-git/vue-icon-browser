<template>
  <div>
    <div class="flex items-end mb-10 gap-10">
      <v-icon :name="store.currentIconDemo" class="h-20 w-20"></v-icon>
      <span class="text-3xl">{{ store.currentIconDemo.$_icon.name }}</span>
    </div>
    <v-button @click="store.currentIconDemo = null">Close</v-button>
    <div class="flex items-center gap-4">
      <v-button>
        <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="secondary">
        <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="small">
        <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="tiny">
        <v-icon :name="store.currentIconDemo" class="mr-2"></v-icon>
        Button
      </v-button>
    </div>
  </div> 
</template>

<script>
import { useStore } from "../composition/useStore";

export default {
  setup() {
    let store = useStore();
    
    return {
      store,
    }
  },
}
</script>
