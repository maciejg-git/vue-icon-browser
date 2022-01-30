import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuDown",
    vendor: "Mdi",
    type: "",
    tags: ["menu","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-menu-down","innerHTML":"<path d='M7,10L12,15L17,10H7Z' />"},
    )
  }
}