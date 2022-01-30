import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonWaxingGibbous",
    vendor: "Mdi",
    type: "",
    tags: ["moon","waxing","gibbous"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-moon-waxing-gibbous","innerHTML":"<path d='M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z' />"},
    )
  }
}