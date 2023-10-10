import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import {
  vueLitewind,
  directives,
  vInput,
  vTabs,
  vTab,
  vModal,
  vButton,
  vSidepanel,
  vNavbar,
  vIcon,
  vDivider,
  vCard,
  vDropdown,
  vDropdownHeader,
  vDropdownMenuItem,
  vSpinner,
  vCheckbox,
  vCloseButton,
  vBackdrop,
  vAlert,
} from "vue-litewind";

import { registerIcon } from "./vue";
import "tailwindcss/tailwind.css";
import "vue-litewind/vue-litewind.css"
// import "./styles-form/form-reset.css";
// import "../node_modules/vue-component-tailwind/dist/style.css";
// import "./styles/icon.css";
// import "./styles/shared.css";
// import "./styles/components.css";
// import "./styles/icon.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "./styles/hljs/github.css";
import "./styles/hljs/night-owl.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

let app = createApp(App);

const icons = import.meta.globEager("./components/icons/*.js");
Object.entries(icons).forEach(([path, definition]) => {
  registerIcon(app, definition.default);
});

app.provide("hljs", hljs);

app.use(vueLitewind, {
  components: {
    vInput,
    vTabs,
    vTab,
    vModal,
    vButton,
    vSidepanel,
    vNavbar,
    vIcon,
    vDivider,
    vCard,
    vDropdown,
    vDropdownHeader,
    vDropdownMenuItem,
    vSpinner,
    vCheckbox,
    vCloseButton,
    vBackdrop,
    vAlert,
  },
  directives,
});

app.use(createPinia());

app.mount("#app");
