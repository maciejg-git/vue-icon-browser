import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewColumn",
    vendor: "Mdi",
    type: "",
    tags: ["view","column"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-view-column","innerHTML":"<path d='M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z' />"},
    )
  }
}