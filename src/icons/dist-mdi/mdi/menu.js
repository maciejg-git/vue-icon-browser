import { h } from 'vue'
export default {
  $_icon: {
    name: "Menu",
    vendor: "Mdi",
    type: "",
    tags: ["menu"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-menu","innerHTML":"<path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />"},
    )
  }
}