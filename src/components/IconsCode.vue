<template>
  <div class="code my-3">
    <pre class="overflow-x-hidden">
      <code ref="codeEl" :class="'language-' + language">{{ code }}</code>
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
import { ref, watch, inject } from "vue";
import { copyTextToClipboard } from "../tools";

export default {
  props: {
    code: { type: String, default: "" },
    language: { type: String, default: "" },
  },
  setup(props) {
    let hljs = inject("hljs");

    let copied = ref(false);

    let codeEl = ref(null);

    watch(
      [codeEl, () => props.code],
      () => hljs.highlightElement(codeEl.value),
      { flush: "post" }
    );

    let handleClickCopy = (text) => copyTextToClipboard(text, copied);

    return {
      copied,
      codeEl,
      handleClickCopy,
    };
  },
};
</script>

<style scoped>
pre {
  @apply whitespace-normal;
}
pre code.hljs {
  @apply whitespace-pre overflow-x-hidden mr-4 !important;
}
.code {
  @apply inline-grid grid-flow-col text-sm bg-neutral-50 dark:bg-neutral-700 rounded-md;
}
</style>
