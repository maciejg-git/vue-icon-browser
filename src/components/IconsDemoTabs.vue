<template>
  <v-tabs name="tabs-rounded">
    <v-tab :name="nativeTabName">
      <div class="py-1">
        <icons-code
          v-for="usage in usageStrings.native"
          :code="usage.s"
          :language="usage.lang"
        ></icons-code>
      </div>
    </v-tab>

    <v-tab name="Vue">
      <div class="py-1">
        <icons-code
          v-for="usage in usageStrings.vue"
          :code="usage.s"
          :language="usage.lang"
        ></icons-code>
        <div>
          <div
            class="inline-flex border rounded-md dark:border-neutral-700 py-2 px-4 mt-2"
          >
            <v-button
              tag="a"
              name="button-link"
              style-button="bold"
              @click.prevent="getVueComponentString()"
            >
              <v-icon name="b-download" class="mr-2"></v-icon>
              Vue component
            </v-button>
          </div>
        </div>
      </div>
    </v-tab>

    <v-tab name="SVG">
      <div class="py-1">
        <icons-code :code="SVGstring" language="xml"></icons-code>
      </div>
    </v-tab>
  </v-tabs>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "../composition/useStore";
import { toKebab, cloneObject, download } from "../tools";
import { templates, urls } from "../const";
import IconsCode from "./IconsCode.vue";

export default {
  components: {
    IconsCode,
  },
  setup() {
    let store = useStore();

    // tab name

    let tabNames = {
      B: "Native Bootstrap",
      Mdi: "Native MDI",
      Fa: "Native Font Awesome",
    };

    let nativeTabName = computed(() => {
      let vendor = store.currentIconDemo.$_icon.vendor;
      return tabNames[vendor];
    });

    // svg

    let SVGstring = ref("");

    let getSVGstring = async () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { vendor, tags, type } = icon.$_icon;

      let file = tags.join("-") + ".svg";
      type = type ? toKebab(type) + "/" : "";
      let url = `${urls[vendor].SVG}${type}${file}`;

      let res = await fetch(url);
      res = await res.text();

      SVGstring.value = res;
    };

    let getVueComponentString = async () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { vendor, tags } = icon.$_icon;
      let name = tags.join("-") + ".js";

      let url = urls[vendor].download.vue + name;

      let res = await fetch(url);
      res = await res.text();

      download(name, res);
    };

    watch(
      () => store.currentIconDemo,
      () => store.currentIconDemo && getSVGstring(),
      { immediate: true }
    );

    // usage strings

    let getString = (tab, usage) => {
      let icon = store.currentIconDemo;
      let { name, vendor, type } = icon.$_icon;
      return templates[vendor][tab][usage].s
        .replace(/%v/g, vendor)
        .replace(/%kv/g, toKebab(vendor))
        .replace(/%n/g, name)
        .replace(/%kn/g, toKebab(name))
        .replace(/%t/g, type)
        .replace(/%kt/g, toKebab(type));
    };

    let usageStrings = computed(() => {
      let icon = store.currentIconDemo;
      let { vendor } = icon.$_icon;
      let s = cloneObject(templates[vendor]);
      for (let tab in s) {
        for (let type in s[tab]) {
          s[tab][type].s = getString(tab, type);
        }
      }
      return s;
    });

    return {
      usageStrings,
      SVGstring,
      getVueComponentString,
      nativeTabName,
    };
  },
};
</script>
