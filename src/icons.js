import { ref, markRaw } from "vue";
import { useStore } from "./composition/useStore";
import { toKebab } from "./tools";

let store = useStore();

export let loadIcons = (icons) => {
  for (let icon in icons) {
    markRaw(icons[icon]);

    icons[icon].selected = ref(false);
    icons[icon].getIconName = getIconName;

    // if (tags[icon].length) icons[icon].$_icon.tagsExtra = tags[icon];
  }

  return Object.values(icons);
};

export let generateTags = (icons) => {
  let tags = {};

  for (let i of icons) {
    for (let tag of i.$_icon.tags) {
      if (!tags[tag]) tags[tag] = [];
      tags[tag].push(i);
    }
  }
  return Object.entries(tags);
};

export let getIconName = function () {
  let i = `${store.settings.vendorPrefix ? this.$_icon.vendor : ""}${
    this.$_icon.name
  }${store.settings.originalNames ? "" : this.$_icon.type.join("")}`;
  if (store.settings.kebabCase) return toKebab(i);
  return i;
};
