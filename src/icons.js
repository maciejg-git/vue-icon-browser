import { ref, markRaw } from "vue";
import { useStore } from "./composition/useStore";

let store = useStore();

export let loadIcons = (icons) => {
  for (let icon in icons) {
    markRaw(icons[icon]);

    icons[icon].selected = ref(false);
    icons[icon].getIconName = getIconName;

    // if (tags[icon].length) icons[icon].$_icon.tagsExtra = tags[icon];
  }

  icons = Object.values(icons).sort((a, b) => {
    return a.$_icon.name > b.$_icon.name ? 1 : -1
  })

  return icons;
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
  let vendor = store.settings.vendorPrefix ? this.$_icon.vendor : "";
  let suffix = this.$_icon.type
    .map((i) => {
      return i.charAt(0).toUpperCase() + i.slice(1);
    })
    .join("");

  let i = `${vendor}${this.$_icon.name}${
    store.settings.originalNames ? "" : suffix
  }`;

  if (store.settings.kebabCase) return toKebab(i);

  return i;
};
