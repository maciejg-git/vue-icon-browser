<template>
  <div class="code flex my-3">
    <pre>
      <code :class="'language-' + language">{{ code }}</code>
    </pre>
    <div class="flex items-center">
      <v-button
        name="button-link"
        class="border-l border-gray-200 dark:border-neutral-800 px-2"
        @click="handleClickCopy(code)"
      >
        <transition name="fade-icon" mode="out-in">
          <v-icon
            v-if="!copied"
            name="mdi-content-copy"
            class="text-gray-700 dark:text-gray-300"
          ></v-icon>
          <v-icon
            v-else
            name="mdi-check-bold"
            class="text-gray-700 dark:text-gray-300"
          ></v-icon>
        </transition>
      </v-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { copyTextToClipboard } from "../tools";

export default {
  props: {
    code: { type: String, default: "" },
    language: { type: String, default: "" },
  },
  setup() {
    let copied = ref(false);

    let handleClickCopy = (text) => {
      copyTextToClipboard(text, copied);
    };

    return {
      copied,
      handleClickCopy,
    };
  },
};
</script>

<style scoped>
pre {
  @apply whitespace-normal;
}
pre code {
  @apply whitespace-pre;
}
.code {
  @apply text-sm w-min bg-neutral-100 dark:bg-neutral-700 rounded-md;
}
</style>
