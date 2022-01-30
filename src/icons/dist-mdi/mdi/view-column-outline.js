import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewColumnOutline",
    vendor: "Mdi",
    type: "",
    tags: ["view","column","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-view-column-outline","innerHTML":"<path d='M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z' />"},
    )
  }
}