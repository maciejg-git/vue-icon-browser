import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from "vue-component-tailwind"
import { createPinia } from 'pinia'
import "tailwindcss/tailwind.css";
import "./styles.css"
import "./styles-material.css"
import "vue-component-tailwind/dist/style.css"

let app = createApp(App)

app.use(plugin)

app.use(createPinia())

app.mount('#app')
