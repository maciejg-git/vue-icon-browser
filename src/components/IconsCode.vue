<template>
  <div>
    <div class="code my-2">
      <pre>
        <code ref="codeEl" :class="'language-' + language">{{ code }}</code>
      </pre>
      <div class="flex items-center">
        <v-button name="button-link" class="px-3" @click="handleClickCopy(code)">
          <v-icon
            v-if="!copied"
            name="mdi-content-copy"
            class="text-gray-600 dark:text-gray-300"
          ></v-icon>
          <v-icon
            v-else
            name="mdi-check-bold"
            class="text-gray-600 dark:text-gray-300"
          ></v-icon>
        </v-button>
      </div>
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
  @apply 
  whitespace-normal
  overflow-x-hidden 
  border-r 
  border-gray-200
  dark:border-neutral-600;
}
pre code.hljs {
  @apply 
  whitespace-pre 
  overflow-x-hidden 
  mr-4 
  pr-0
  py-4 !important;
}
.code {
  @apply 
  max-w-[450px]
  inline-grid 
  grid-flow-col 
  text-sm
  rounded-md
  bg-neutral-100
  dark:bg-neutral-700;
}
</style>
