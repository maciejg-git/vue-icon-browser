import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuLeftOutline",
    vendor: "Mdi",
    type: "",
    tags: ["menu","left","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-menu-left-outline","innerHTML":"<path d='M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z' />"},
    )
  }
}