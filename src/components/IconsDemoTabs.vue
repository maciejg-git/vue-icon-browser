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
        <v-button
          tag="a"
          name="button-link"
          style-button="download"
          @click.prevent="downloadVueComponent()"
        >
          <v-icon name="b-download" class="mr-2"></v-icon>
          Vue component
        </v-button>
      </div>
    </v-tab>

    <v-tab name="SVG">
      <div class="py-1">
        <icons-code :code="SVGstring" language="xml"></icons-code>
        <v-button
          tag="a"
          name="button-link"
          style-button="download"
          @click.prevent="downloadSVG()"
        >
          <v-icon name="b-download" class="mr-2"></v-icon>
          SVG
        </v-button>
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
      B: "Bootstrap",
      Mdi: "Material Design Icons",
      Fa: "Font Awesome",
    };

    let nativeTabName = computed(() => {
      let vendor = store.currentIconDemo.$_icon.vendor;
      return tabNames[vendor];
    });

    // svg

    let SVGstring = ref("");

    let getSVGurl = () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { vendor, tags, type } = icon.$_icon;

      let file = tags.join("-") + ".svg";
      type = toKebab(type);
      if (type === "brand") type = "brands";

      let url = [urls[vendor].SVG, type, file].filter(Boolean).join("/");

      return {
        file,
        url,
      };
    };

    let getSVGstring = async () => {
      let { url } = getSVGurl();

      let res = await fetch(url);
      res = await res.text();

      SVGstring.value = res;
    };

    let downloadSVG = async () => {
      let { url, file } = getSVGurl();

      let res = await fetch(url);
      res = await res.text();

      download(file, res);
    };

    let downloadVueComponent = async () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { vendor, tags, type } = icon.$_icon;
      type = toKebab(type);
      let file = tags.join("-") + (type ? "-" + type : "") + ".js";
      if (type === "brand") type = "brands";

      let url = [urls[vendor].download.vue, type, file]
        .filter(Boolean)
        .join("/");

      let res = await fetch(url);
      res = await res.text();

      download(file, res);
    };

    watch(
      () => store.currentIconDemo,
      () => store.currentIconDemo && getSVGstring(),
      { immediate: true }
    );

    // usage strings

    let getString = (tab, usage) => {
      let icon = store.currentIconDemo;
      let { name, vendor, type, tags } = icon.$_icon;

      return templates[vendor][tab][usage].s
        .replace(/%v/g, vendor)
        .replace(/%kv/g, toKebab(vendor))
        .replace(/%n/g, name)
        .replace(/%kn/g, tags.join("-"))
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
      downloadVueComponent,
      downloadSVG,
      nativeTabName,
    };
  },
};
</script>
