import { createApp, ref } from 'vue'
import App from './App.vue'
import Icon from "./vue/Icon.vue"
import { plugin } from "vue-component-tailwind"
import "tailwindcss/tailwind.css";
import "./styles.css"
import "vue-component-tailwind/dist/style.css"

let app = createApp(App)

app.use(plugin)

let icons = {
  bootstrap: [],
  mdi: [],
  fa: [],
}

let t = {
  bootstrap: {},
  mdi: {},
  fa: {},
}

let tags = {
  bootstrap: Object.entries(t.bootstrap),
  mdi: Object.entries(t.mdi),
  fa: Object.entries(t.fa),
}

// console.log(icons)
// console.log(tags)

app.provide("icons", icons)
app.provide("tags", tags)

app.mount('#app')

