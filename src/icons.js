import { ref, markRaw } from "vue";
import { useStore } from "./composition/useStore";
import { dbLoadVendor } from "./supabase";

let store = useStore();

export let loadIcons = (icons) => {
  for (let icon in icons) {
    markRaw(icons[icon]);

    let i = icons[icon]

    i.selected = ref(false);
    i.getIconName = getIconName;
    i.getUniqueIconName = getUniqueIconName;
    i.$_icon.uid = i.$_icon.vendor + i.$_icon.name + i.$_icon.type.join("")
  }

  return Object.values(icons).sort((a, b) => {
    return a.$_icon.name > b.$_icon.name ? 1 : -1;
  });
};

export let generateTags = async (icons, vendor) => {
  let extTags = await dbLoadVendor(vendor);

  extTags = extTags.reduce((acc, i) => {
    acc[i.icon] = i.tags;
    return acc;
  }, {});

  let tags = {};
  let uniqueIconName = "";

  for (let i of icons) {
    for (let tag of i.$_icon.tags) {
      if (!tags[tag]) tags[tag] = [];
      tags[tag].push(i);
    }

    uniqueIconName = i.getUniqueIconName();

    if (extTags[uniqueIconName]) {
      for (let tag of extTags[uniqueIconName]) {
        if (!tags[tag]) tags[tag] = [];
        tags[tag].push(i);
      }
    }
  }
  return Object.entries(tags);
};

export let getUniqueIconName = function () {
  let icon = this.$_icon;

  return `${icon.vendor.toLowerCase()}-${icon.tags.join("-")}${
    icon.type.length ? "-" : ""
  }${icon.type.join("-")}`;
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
