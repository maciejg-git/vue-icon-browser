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
import { toKebab } from "../tools";
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

      if (!icon) return

      let { vendor, tags, type } = icon.$_icon;

      let file = tags.join("-") + ".svg";
      type = type ? toKebab(type) + "/" : "";
      let url = `${urls[vendor].SVG}${type}${file}`;
      console.log(url);

      let res = await fetch(url);
      res = await res.text();

      SVGstring.value = res;
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
        .replace(/%tn/g, toKebab(type));
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

    return {
      usageStrings,
      SVGstring,
      nativeTabName,
    };
  },
};
</script>
