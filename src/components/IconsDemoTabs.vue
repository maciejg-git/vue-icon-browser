<template>
  <v-tabs base="roundedTabs">
    <v-tab :name="nativeTabName">
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
        <div class="flex gap-x-4">
          <v-button
            tag="a"
            mod-button="preset:download"
            @click.prevent="downloadVueComponent()"
          >
            <v-icon name="b-download" class="mr-2"></v-icon>
            Vue component
          </v-button>
          <v-button
            tag="a"
            mod-button="preset:download"
            @click.prevent="openVueComponentGithub()"
          >
            <v-icon name="b-github" class="mr-2"></v-icon>
            Github
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
            mod-button="preset:download"
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

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "../composition/useStore";
import { toKebab, cloneObject, download } from "../tools";
import { templates, urls } from "../const";
import IconsCode from "./IconsCode.vue";

let store = useStore();

// tab name

let nativeTabName = computed(() => {
  let { vendor } = store.currentIconDemo.$_icon;

  return store[vendor].name;
});

// url

let makeUrl = (path) => path.filter(Boolean).join("/");

// svg

let SVGstring = ref("");

let getSVGurl = () => {
  let { tags, vendor, type } = store.currentIconDemo.$_icon;

  let file = tags.join("-") + ".svg";

  type = type.map((i) => {
    return i.toLowerCase()
  })

  let url = makeUrl([urls[vendor].SVG, ...type, file]);

  return {
    file,
    url,
  };
};

watch(
  () => store.currentIconDemo,
  async (value) => {
    if (!value) return;

    let { url } = getSVGurl();

    let res = await fetch(url);
    res = await res.text();

    SVGstring.value = res;
  },
  { immediate: true }
);

let downloadSVG = async () => {
  let { url, file } = getSVGurl();

  let res = await fetch(url);
  res = await res.text();

  download(file, res);
};

// vue component

let downloadVueComponent = async () => {
  let { vendor, type, tags } = store.currentIconDemo.$_icon;

  let name = tags.join("-");

  type = type.map(i => i.toLowerCase()).join("-")

  let file = name + (type ? "-" + type : "") + ".js";

  let url = makeUrl([urls[vendor].download.vue, file]);

  let res = await fetch(url);
  res = await res.text();

  download(file, res);
};

let openVueComponentGithub = () => {
  let { vendor, type, tags } = store.currentIconDemo.$_icon;

  let name = tags.join("-");

  type = type.map(i => i.toLowerCase()).join("-")

  let file = name + (type ? "-" + type : "") + ".js";

  let url = makeUrl([urls[vendor].github.vue, file]);

  window.open(url);
};

// usage strings

let getStringFromTemplate = (tab, usage) => {
  let { name, vendor, type, tags } = store.currentIconDemo.$_icon;

  type = type.join("");

  return templates[vendor][tab][usage].s
    .replace(/%v/g, vendor)
    .replace(/%kv/g, toKebab(vendor))
    .replace(/%n/g, name)
    .replace(/%kn/g, tags.join("-"))
    .replace(/%t/g, type)
    .replace(/%kt/g, toKebab(type));
};

let usageStrings = computed(() => {
  let { vendor } = store.currentIconDemo.$_icon;

  let template = cloneObject(templates[vendor]);

  for (let tab in template) {
    for (let type in template[tab]) {
      template[tab][type].s = getStringFromTemplate(tab, type);
    }
  }

  return template;
});
</script>
