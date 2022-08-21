<template>
  <div class="flex justify-end justify-items-end">
    <!-- icon size -->

    <div class="flex items-center">
      <template v-for="b in buttons.size" :key="b.option">
        <v-button
          name="button-link"
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
      <v-dropdown auto-close-menu :offsetY="5" placement="bottom">
        <template #reference="{ reference, onTrigger }">
          <v-button name="button-link" :ref="reference" v-on="onTrigger">
            <v-icon
              name="b-bag-check"
              class="h-7 w-7 mx-2 dark:text-neutral-300"
              :class="{ 'opacity-30': store.sidepanelState !== 'settings' }"
            ></v-icon>
          </v-button>
        </template>
        <v-card width="320px" style-card="menu shadow">
          <v-dropdown-header> Selected icons... </v-dropdown-header>
          <v-dropdown-menu-item
            tag="button"
            :disabled="!store.selectedIcons.length"
            @click="handleRemoveAll"
          >
            Remove all
          </v-dropdown-menu-item>
          <v-divider />
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
          <v-divider />
          <v-dropdown-menu-item
            tag="button"
            :disabled="!store.selectedIcons.length"
          >
            Sort
          </v-dropdown-menu-item>
        </v-card>
      </v-dropdown>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <v-button
        name="button-link"
        @click="handleToolbarClick('settings')"
        v-tooltip.bottom.oY6="'Settings'"
      >
        <v-icon
          :name="BGear"
          class="h-7 w-7 mx-2 dark:text-neutral-300"
          :class="{ 'opacity-30': store.sidepanelState !== 'settings' }"
        ></v-icon>
      </v-button>
    </div>

    <div class="flex items-center border-l px-2 dark:border-neutral-700">
      <template v-for="vendor in store.vendors" :key="vendor">
        <div class="flex items-center px-1 mx-0.5">
          <v-button
            name="button-link"
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

<script>
import { useStore } from "../composition/useStore";
import { BMoon, BGear } from "../icons/bootstrap";
import { MdiSizeS, MdiSizeM, MdiSizeL } from "../icons/mdi";
import { toKebab, download } from "../tools";
import { urls } from "../const";

export default {
  setup() {
    let store = useStore();

    let icons = {
      bootstrap: "b-bootstrap-fill",
      mdi: "mdi-material-design",
      fontawesome: "fa-font-awesome-brand",
    };

    let buttons = {
      size: {
        sm: {
          option: "sm",
          icon: MdiSizeS,
          tooltip: "Small icons",
        },
        md: {
          option: "md",
          icon: MdiSizeM,
          tooltip: "Medium icons",
        },
        lg: {
          option: "lg",
          icon: MdiSizeL,
          tooltip: "Large icons",
        },
      },
    };

    let handleToolbarClick = (option) => {
      if (option === "sm") store.size = "sm";
      else if (option === "md") store.size = "md";
      else if (option === "lg") store.size = "lg";
      else if (option === "settings") {
        store.isSidepanelActive = !store.isSidepanelActive;
      }
    };

    let joinUrl = (path) => path.filter(Boolean).join("/");

    let downloadVueComponent = async (icon) => {
      if (!icon) return;

      let { vendor, tags, type } = icon.$_icon;
      type = toKebab(type);
      let file = tags.join("-") + (type ? "-" + type : "") + ".js";
      if (type === "brand") type = "brands";

      let url = joinUrl([urls[vendor].download.vue, type, file]);

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

    return {
      store,
      buttons,
      handleToolbarClick,
      handleToggleVendor,
      icons,
      BMoon,
      BGear,
      MdiSizeS,
      MdiSizeM,
      MdiSizeL,
      handleRemoveAll,
      handleDownloadAllVue,
    };
  },
};
</script>
