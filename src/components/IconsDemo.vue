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
      <v-close-button @click="handleClickClosebutton" />
    </div>

    <div class="flex items-center gap-x-5 mb-5 mt-10">
      <v-button>
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 mr-2"></v-icon>
        Button
      </v-button>
      <v-button style-button="secondary">
        Button
        <v-icon :name="store.currentIconDemo" class="h-5 w-5 ml-2"></v-icon>
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
      <v-button style-button="circle">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
      <v-button style-button="equal secondary">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
      <v-button style-button="pill red">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
      </v-button>
      <v-button name="button-link" class="font-semibold text-lg">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
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

    <!-- link -->

    <div class="flex items-center gap-10 my-4">
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
      <v-button
        style-button="primary-outline small"
        @click="isExtendedDemoActive = true"
      >
        Show more
      </v-button>
    </div>

    <!-- links -->

    <v-tabs name="tabs-material">
      <v-tab :name="nativeTabName">
        <div class="code">
          <pre>
              <code class="language-xml">{{ getUsageString('native') }}</code>
            </pre>
        </div>
      </v-tab>
      <v-tab name="Vue">
        <div class="px-2 py-1">
          <div class="code flex my-1">
            <pre>
              <code class="language-javascript">{{ getVueString("import") }}</code>
            </pre>
            <div class="flex items-center">
            <v-button name="button-link" @click="copyTextToClipboard(getVueString('import'))">
              <transition name="fade-icon" mode="out-in">
              <v-icon
                  v-if="!copied.vue"
                  name="mdi-content-copy"
                  class="text-gray-700 mr-2 dark:text-gray-300"
                  ></v-icon>
              <v-icon
                  v-else
                  name="mdi-check-bold"
                  class="text-gray-700 mr-2 dark:text-gray-300"
                  ></v-icon>
              </transition>
            </v-button>
          </div>
          </div>
          <div class="code flex my-1">
            <pre>
              <code class="language-xml">{{ getVueString("component") }}</code>
            </pre>
          </div>
          <div class="code flex my-1">
            <pre>
              <code class="language-xml">{{ getVueString("component bind") }}</code>
            </pre>
          </div>
        </div>
      </v-tab>
      <v-tab name="SVG"> </v-tab>
    </v-tabs>
  </div>

  <!-- extended demo -->

  <v-modal
    v-model="isExtendedDemoActive"
    :title="store.currentIconDemo.getIconName()"
    no-primary-button
    secondary-button-close
    transition="fade-scale"
  >
    <icons-demo-extended></icons-demo-extended>
  </v-modal>
</template>

<script>
import { ref, reactive, computed, onUpdated, inject, onMounted } from "vue";
import IconsDemoExtended from "./IconsDemoExtended.vue";
import { useStore } from "../composition/useStore";
import { toKebab } from "../tools";

export default {
  components: {
    IconsDemoExtended,
  },
  setup(props) {
    let store = useStore();

    let isDemoActive = ref(false);

    let isExtendedDemoActive = ref(false);

    let alertModel = ref(true);

    let hljs = inject("hljs");

    onMounted(() => hljs.highlightAll());

    onUpdated(() => hljs.highlightAll());

    let copied = reactive({
      native: false,
      vue: false,
    })

    let scheduleRefUpdate = (ref, prop, t) => {
      setTimeout(() => {
        ref[prop] = false;
      }, t);
    };

    let copyTextToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(
        function () {
          copied.vue = true;
          scheduleRefUpdate(copied, 'vue', 1000);
        },
        function () {}
      );
    };

    let nativeTabName = computed(() => {
      let vendor = store.currentIconDemo.$_icon.vendor;
      return vendor === "B"
        ? "Native Bootstrap"
        : vendor === "Mdi"
        ? "Native MDI"
        : vendor === "FA"
        ? "Native Font Awesome"
        : "Native";
    });

    let templates = {
      native: `<i class="bi bi-%n}"></i>`,
      vueImport: `import { %v%n } from "./vue-icons-%v"`
    }

    let getUsageString = (type) => {
      let icon = store.currentIconDemo;
      let { name, vendor } = icon.$_icon;
      return templates[type].replace("%v", vendor).replace("%n", name)
    }

    let getVueString = (code) => {
      let icon = store.currentIconDemo;
      let { name, vendor } = icon.$_icon;
      if (code === "import") {
        return `import { ${vendor}${name} } from "./vue-icons-${vendor}"`;
      }
      if (code === "component") {
        return `<v-icon name="${toKebab(vendor + name)}" />`;
      }
      if (code === "component bind") {
        return `<v-icon :name="${vendor + name}" />`;
      }
    };

    let handleClickClosebutton = () => {
      store.unselectIcon(store.currentIconDemo);
    };

    return {
      store,
      isDemoActive,
      isExtendedDemoActive,
      alertModel,
      copied,
      copyTextToClipboard,
      getUsageString,
      getVueString,
      nativeTabName,
      handleClickClosebutton,
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
  @apply text-sm w-min bg-neutral-100 dark:bg-neutral-700 rounded-md
}
</style>
