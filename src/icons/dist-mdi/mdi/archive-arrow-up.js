import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveArrowUp",
    vendor: "Mdi",
    type: "",
    tags: ["archive","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-archive-arrow-up","innerHTML":"<path d='M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3' />"},
    )
  }
}