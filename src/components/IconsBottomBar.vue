<template>
      <div class="fixed bottom-0 bg-gray-200 p-2">
        <div class="flex items-center">
          <!-- <v-icon -->
          <!--   :icon="currentIcon" -->
          <!--   class="h-10 w-10 m-1" -->
          <!-- ></v-icon> -->
          <span class="font-semibold ml-4">
            {{ currentIcon }}
          </span>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    currentIcon: { type: Object },
  },
  setup() {
    
  },
}
</script>
