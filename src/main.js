import { createApp, provide } from 'vue'
import App from './App.vue'
import { plugin } from "vue-component-tailwind"
import { createPinia } from 'pinia'
import "tailwindcss/tailwind.css";
import "./styles.css"
import "./styles-material.css"
import "vue-component-tailwind/dist/style.css"
import { registerIcon } from "./vue"

import { BBootstrapFill } from "./icons/dist-bootstrap";
import { MdiMaterialDesign } from "./icons/dist-mdi";
import { FaFontAwesomeFlagBrand } from "./icons/dist-fontawesome";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', javascript);

let app = createApp(App)

registerIcon(app, [
  BBootstrapFill,
  MdiMaterialDesign,
  FaFontAwesomeFlagBrand,
])

app.provide("hljs", hljs)

app.use(plugin)

app.use(createPinia())

app.mount('#app')
