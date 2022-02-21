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
        <div class="dark:text-gray-300 p-4">
          <pre>
              <code class="text-sm p-1 w-min language-xml">{{ getNativeString() }}</code>
            </pre>
        </div>
      </v-tab>
      <v-tab name="Vue">
        <div class="dark:text-gray-300 px-2 py-1">
          <div>
            <pre>
              <code class="text-sm p-1 w-min language-javascript">{{ getVueString("import") }}</code>
            </pre>
          </div>
          <div>
            <pre>
              <code class="text-sm p-1 w-min language-xml">{{ getVueString("component") }}</code>
            </pre>
          </div>
          <div>
            <pre>
              <code class="text-sm p-1 w-min language-xml">{{ getVueString("component bind") }}</code>
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
import { ref, computed, onUpdated, inject, onMounted } from "vue";
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

    let getNativeString = () => {
      let icon = store.currentIconDemo;
      let { name, vendor } = icon.$_icon;
      if (vendor === "B") {
        return `<i class="bi bi-${toKebab(name)}"></i>`;
      }
    };

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
      getNativeString,
      getVueString,
      nativeTabName,
      handleClickClosebutton,
    };
  },
};
</script>

<style scoped>
pre {
  @apply whitespace-normal my-2;
}
pre code {
  @apply whitespace-pre;
}
</style>
