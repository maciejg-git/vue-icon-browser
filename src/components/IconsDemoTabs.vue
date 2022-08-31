<template>
  <v-tabs name="tabs-rounded">
    <v-tab :name="nativeTabName" v-if="hasNativeTab()">
      <div class="py-1">
        <icons-code
          v-for="usage in usageStrings.native"
          :code="usage.s"
          :language="usage.lang"
        />
      </div>
    </v-tab>

    <v-tab name="Vue">
      <div class="py-1">
        <icons-code
          v-for="usage in usageStrings.vue"
          :code="usage.s"
          :language="usage.lang"
        />
        <div>
          <v-button
            tag="a"
            name="button-plain"
            style-button="download"
            @click.prevent="downloadVueComponent()"
          >
            <v-icon name="b-download" class="mr-2"></v-icon>
            Vue component
          </v-button>
        </div>
      </div>
    </v-tab>

    <v-tab name="SVG">
      <div class="py-1">
        <icons-code :code="SVGstring" language="xml" />
        <div>
          <v-button
            tag="a"
            name="button-plain"
            style-button="download"
            @click.prevent="downloadSVG()"
          >
            <v-icon name="b-download" class="mr-2"></v-icon>
            SVG
          </v-button>
        </div>
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
import kebabCase from "just-kebab-case"

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
      let { vendor } = store.currentIconDemo.$_icon;
      return tabNames[vendor];
    });

    let hasNativeTab = () => {
      let { vendor } = store.currentIconDemo.$_icon;

      return !(vendor == 'H') 
    }

    // url

    let makeUrl = (path) => path.filter(Boolean).join("/");

    // svg

    let SVGstring = ref("");

    let getSVGurl = () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { name, vendor, type } = icon.$_icon;

      let file = kebabCase(name) + ".svg"

      type = type.map((i) => kebabCase(i))

      let url = makeUrl([urls[vendor].SVG, ...type, file]);

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

    watch(
      () => store.currentIconDemo,
      () => store.currentIconDemo && getSVGstring(),
      { immediate: true }
    );

    // vue component

    let downloadVueComponent = async () => {
      let icon = store.currentIconDemo;

      if (!icon) return;

      let { name, vendor, type } = icon.$_icon;

      name = kebabCase(name)
      type = kebabCase(type.join(""))

      let file = name + (type ? "-" + type : "") + ".js";

      let url = makeUrl([urls[vendor].download.vue, file]);

      let res = await fetch(url);
      res = await res.text();

      download(file, res);
    };

    // usage strings

    let getStringFromTemplate = (tab, usage) => {
      let icon = store.currentIconDemo;
      let { name, vendor, type, tags } = icon.$_icon;

      type = type.join("")

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

      let template = cloneObject(templates[vendor]);

      for (let tab in template) {
        for (let type in template[tab]) {
          template[tab][type].s = getStringFromTemplate(tab, type);
        }
      }

      return template;
    });

    return {
      usageStrings,
      hasNativeTab,
      SVGstring,
      downloadVueComponent,
      downloadSVG,
      nativeTabName,
    };
  },
};
</script>
