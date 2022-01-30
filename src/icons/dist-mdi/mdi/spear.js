import { h } from 'vue'
export default {
  $_icon: {
    name: "Spear",
    vendor: "Mdi",
    type: "",
    tags: ["spear"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-spear","innerHTML":"<path d='M16 9H16.41L3.41 22L2 20.59L15 7.59V9H16M16 4V8H20L22 2L16 4Z' />"},
    )
  }
}