import { createApp, provide } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "tailwindcss/tailwind.css";

// import { plugin } from "vue-component-tailwind";
import { componentPlugin } from "vue-component-tailwind"
import { components } from "vue-component-tailwind"
import { directives } from "vue-component-tailwind"

import { registerIcon } from "./vue";
import "tailwindcss/tailwind.css";
import "./styles-form/form-reset.css"
import "vue-component-tailwind/dist/style.css"
import "./styles/icon.css"
import "./styles/shared.css"
import "./styles/components.css"
import "./styles/icon.css"
// import "./styles/components.css";
// import "vue-component-tailwind/dist/style.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
// import "./styles/hljs/github.css";
import "./styles/hljs/night-owl.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

let app = createApp(App);

const icons = import.meta.globEager('./components/icons/*.js')
Object.entries(icons).forEach(([path, definition]) => {
  registerIcon(app, definition.default)
})

app.provide("hljs", hljs);
app.use(componentPlugin, {
  components,
  directives,
  componentProps: {
    select: {
      inline: true,
      offsetY: 5,
      card: {
        base: 'flat',
        styleCard: 'menu shadow rounded',
      }
    }
  }
});
app.use(createPinia());
app.mount("#app");
