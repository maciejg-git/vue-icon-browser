<template>
  <div class="flex justify-end justify-items-end">
    <!-- icon size -->

    <div class="flex items-center">
      <template v-for="b in buttons.size" :key="b.option">
        <v-button
          base="button-link"
          @click="handleToolbarClick(b.option)"
          v-tooltip.bottom.oY6="b.tooltip"
        >
          <v-icon
            :name="b.icon"
            class="h-7 w-7 mx-2 dark:text-neutral-400"
            :class="{ 'opacity-30': store.size !== b.option }"
          ></v-icon>
        </v-button>
      </template>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <v-button base="button-link" @click="handleToolbarClick('layout')">
        <v-icon
          v-show="store.groupBy"
          name="b-grid"
          class="h-7 w-7 mx-2 dark:text-neutral-400"
          v-tooltip.bottom.oY6="'Grid layout'"
        ></v-icon>
        <v-icon
          v-show="!store.groupBy"
          name="mdi-format-align-left"
          class="h-7 w-7 mx-2 dark:text-neutral-400"
          v-tooltip.bottom.oY6="'List layout'"
        ></v-icon>
      </v-button>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <v-dropdown auto-close-menu :offsetY="5" placement="bottom">
        <template #reference="{ reference, onTrigger }">
          <v-button base="button-link" :ref="reference" v-on="onTrigger">
            <v-icon
              name="b-bag-check"
              class="h-7 w-7 mx-2 dark:text-neutral-400"
            ></v-icon>
          </v-button>
        </template>
        <v-card width="320px" style-card="menu shadow borderless">
          <v-dropdown-header> Selected icons... </v-dropdown-header>
          <v-dropdown-menu-item
            :disabled="!store.selectedIcons.length"
            tag="button"
            @click="handleCopyAll"
          >
            Copy all as list
          </v-dropdown-menu-item>
          <v-divider></v-divider>
          <v-dropdown-menu-item
            tag="button"
            :disabled="!store.selectedIcons.length"
            @click="handleDownloadAllVue"
          >
            Download all as Vue
          </v-dropdown-menu-item>
          <v-dropdown-menu-item
            :disabled="!store.selectedIcons.length"
            tag="button"
          >
            Download all as SVG
          </v-dropdown-menu-item>
          <!-- <v-dropdown-menu-item -->
          <!--   tag="button" -->
          <!--   :disabled="!store.selectedIcons.length" -->
          <!-- > -->
          <!--   Sort -->
          <!-- </v-dropdown-menu-item> -->
          <v-divider></v-divider>
          <v-dropdown-menu-item
            tag="button"
            :disabled="!store.selectedIcons.length"
            @click="handleRemoveAll"
          >
            Remove all
          </v-dropdown-menu-item>
        </v-card>
      </v-dropdown>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <v-button
        base="button-link"
        @click="handleToolbarClick('settings')"
        v-tooltip.bottom.oY6="'Settings'"
        disabled
      >
        <v-icon
          name="b-gear"
          class="h-7 w-7 mx-2 dark:text-neutral-400"
        ></v-icon>
      </v-button>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <template v-for="vendor in store.vendors" :key="vendor">
        <div class="flex items-center px-1 mx-0.5">
          <v-button
            base="button-link"
            @click="handleToggleVendor(vendor)"
            v-tooltip.bottom.oY15="store[vendor].name"
          >
            <v-spinner
              v-if="store[vendor].loading"
              type="svg"
              style-spinner="secondary small"
            />
            <v-icon
              v-if="!store[vendor].loading"
              :name="icons[vendor]"
              class="h-7 w-7 text-purple-500 dark:text-purple-500"
              :class="{ 'opacity-30': !store[vendor].active }"
            ></v-icon>
          </v-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../composition/useStore";
import { toKebab, download, copyTextToClipboard } from "../tools";
import { urls } from "../const";

let store = useStore();

let icons = {
  bootstrap: "b-bootstrap-fill",
  mdi: "mdi-material-design",
  fontawesome: "fa-font-awesome-brands",
  heroicons: "b-shield",
};

let buttons = {
  size: {
    sm: {
      option: "sm",
      icon: "mdi-size-s",
      tooltip: "Small icons",
    },
    md: {
      option: "md",
      icon: "mdi-size-m",
      tooltip: "Medium icons",
    },
    lg: {
      option: "lg",
      icon: "mdi-size-l",
      tooltip: "Large icons",
    },
  },
};

let handleToolbarClick = (option) => {
  if (option === "sm") {
    store.size = "sm";
  } else if (option === "md") {
    store.size = "md";
  } else if (option === "lg") {
    store.size = "lg";
  } else if (option === "settings") {
    store.isSidepanelActive = !store.isSidepanelActive;
  } else if (option === "layout") {
    store.groupBy = !store.groupBy;
  }
};

let makeUrl = (path) => path.filter(Boolean).join("/");

let downloadVueComponent = async (icon) => {
  let { vendor, type, tags } = icon.$_icon;

  let name = tags.join("-");
  type = type.join("-");

  let file = name + (type ? "-" + type : "") + ".js";

  let url = makeUrl([urls[vendor].download.vue, file]);

  let res = await fetch(url);
  res = await res.text();

  download(file, res);
};

let handleToggleVendor = (vendor) => store.toggleVendor(vendor);

let handleRemoveAll = () => {
  store.clearSelected();
};

let handleDownloadAllVue = () => {
  for (let icon of store.selectedIcons) {
    downloadVueComponent(icon);
  }
};

let handleCopyAll = () => {
  let list = [];

  for (let icon of store.selectedIcons) {
    list.push(icon.getIconName());
  }

  copyTextToClipboard(list.join(",\n"), null);
};
</script>
