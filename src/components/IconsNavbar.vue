<template>
  <v-navbar
    sticky
    class="flex items-center text-gray-200 px-4 py-2 shadow-none max-h-14"
  >
    <span class="text-white text-xl font-bold ml-2"> Vue-icons </span>
    <div class="flex gap-x-3 divide-x ml-auto">
      <div>
        <v-button @click="toggleVendor('bootstrap')">
          <v-spinner
            v-if="vendors.bootstrap.loading"
            style-spinner="secondary small"
            class="mr-2"
          ></v-spinner>
          <v-icon
            v-if="vendors.bootstrap.active && !vendors.bootstrap.loading"
            :name="BCheckLg"
            class="mr-2"
          ></v-icon>
          <v-icon
            v-if="!vendors.bootstrap.active && !vendors.bootstrap.loading"
            :name="BPlusLg"
            class="mr-2"
          ></v-icon>
          Bootstrap Icons
        </v-button>
      </div>
      <div>
        <v-button @click="toggleVendor('mdi')">
          <v-spinner
            v-if="vendors.mdi.loading"
            style-spinner="secondary small"
            class="mr-2"
          ></v-spinner>
          <v-icon
            v-if="vendors.mdi.active && !vendors.mdi.loading"
            :name="BCheckLg"
            class="mr-2"
          ></v-icon>
          <v-icon
            v-if="!vendors.mdi.active && !vendors.mdi.loading"
            :name="BPlusLg"
            class="mr-2"
          ></v-icon>
          Material Design Icons
        </v-button>
      </div>
      <div>
        <v-button @click="toggleVendor('fontawesome')">
          <v-spinner
            v-if="vendors.fontawesome.loading"
            style-spinner="secondary small"
            class="mr-2"
          ></v-spinner>
          <v-icon
            v-if="vendors.fontawesome.active && !vendors.fontawesome.loading"
            :name="BCheckLg"
            class="mr-2"
          ></v-icon>
          <v-icon
            v-if="!vendors.fontawesome.active && !vendors.fontawesome.loading"
            :name="BPlusLg"
            class="mr-2"
          ></v-icon>
          Font Awesome Icons
        </v-button>
      </div>
    </div>
  </v-navbar>
</template>

<script>
import { BCheckLg, BX, BXLg, BPlusLg } from "../icons/dist-bootstrap";

export default {
  props: {
    vendors: { type: Object, default: undefined },
  },
  setup(props) {
    let toggleVendor = (vendor) => {
      let vendors = props.vendors;
      if (!vendors[vendor].active) vendors[vendor].loading = true;
      vendors[vendor].active = !vendors[vendor].active;
    };

    return {
      toggleVendor,
      BCheckLg,
      BPlusLg,
    };
  },
};
</script>
