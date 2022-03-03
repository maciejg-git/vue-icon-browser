<template>
  <div
    class="overflow-y-auto mt-6 px-1 min-w-[500px]"
    style="max-height: calc(100vh - 5em)"
  >
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
      <v-button style-button="pill small red">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
      </v-button>
      <v-button name="button-link" class="font-semibold text-lg">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6 mr-2"></v-icon>
        Button
      </v-button>
    </div>

    <div class="flex items-center gap-x-5 my-6">
      <v-button style-button="circle">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
      <v-button style-button="equal secondary">
        <v-icon :name="store.currentIconDemo" class="h-6 w-6"></v-icon>
      </v-button>
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

    <div class="flex items-center gap-5 my-6">
      <div class="relative flex items-center">
        <v-icon
          :name="store.currentIconDemo"
          class="absolute h-6 w-6 text-gray-400 dark:text-gray-400 ml-2"
        ></v-icon>
        <v-input class="pl-10" placeholder="Search"></v-input>
      </div>
    </div>

    <!-- link -->

    <div class="flex items-center gap-10 my-5">
      <a href="" class="flex items-center text-blue-400 dark:text-blue-400">
        <v-icon class="mr-1" :name="store.currentIconDemo"></v-icon>
        <span class="underline">Link</span>
      </a>
    </div>

    <!-- text -->

    <div class="flex justify-between items-end my-6">
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
        <div class="py-1 flex flex-col items-start">
          <icons-code
            v-for="usage in usageStrings.native"
            :code="usage.s"
            :language="usage.lang"
          ></icons-code>
        </div>
      </v-tab>

      <v-tab name="Vue">
        <div class="py-1 flex flex-col items-start">
          <icons-code
            v-for="usage in usageStrings.vue"
            :code="usage.s"
            :language="usage.lang"
          ></icons-code>
        </div>
      </v-tab>
      <v-tab name="SVG">
        <div class="py-1" style="max-width: 480px">
          <icons-code :code="SVGstring" language="xml"></icons-code>
        </div>
      </v-tab>
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
import { ref, computed, watch } from "vue";
import IconsDemoExtended from "./IconsDemoExtended.vue";
import { useStore } from "../composition/useStore";
import { toKebab, copyTextToClipboard } from "../tools";
import { templates, urls } from "../const";
import IconsCode from "./IconsCode.vue";

export default {
  components: {
    IconsDemoExtended,
    IconsCode,
  },
  setup() {
    let store = useStore();

    let isDemoActive = ref(false);

    let isExtendedDemoActive = ref(false);

    let alertModel = ref(true);

    let SVGstring = ref("");

    let getSVGstring = async () => {
      let icon = store.currentIconDemo;
      let { name, vendor } = icon.$_icon;
      let res = await fetch(urls[vendor].SVG + toKebab(name) + ".svg");
      res = await res.text();
      SVGstring.value = res;
    };

    watch(
      () => store.currentIconDemo,
      () => getSVGstring(),
      { immediate: true }
    );

    let tabNames = {
      B: "Native Bootstrap",
      Mdi: "Native MDI",
      FA: "Native Font Awesome",
    };

    let nativeTabName = computed(() => {
      let vendor = store.currentIconDemo.$_icon.vendor;
      return tabNames[vendor];
    });

    let getString = (type, usage) => {
      let icon = store.currentIconDemo;
      let { name, vendor } = icon.$_icon;
      return templates[vendor][type][usage].s
        .replace(/%v/g, vendor)
        .replace(/%kv/g, toKebab(vendor))
        .replace(/%n/g, name)
        .replace(/%kn/g, toKebab(name));
    };

    let usageStrings = computed(() => {
      let icon = store.currentIconDemo;
      let { vendor } = icon.$_icon;
      let s = JSON.parse(JSON.stringify(templates[vendor]));
      for (let tab in s) {
        for (let type in s[tab]) {
          s[tab][type].s = getString(tab, type);
        }
      }
      return s;
    });

    let handleClickClosebutton = () => {
      store.unselectIcon(store.currentIconDemo);
    };

    return {
      store,
      isDemoActive,
      isExtendedDemoActive,
      alertModel,
      copyTextToClipboard,
      usageStrings,
      getSVGstring,
      SVGstring,
      nativeTabName,
      handleClickClosebutton,
    };
  },
};
</script>

<style scoped></style>
