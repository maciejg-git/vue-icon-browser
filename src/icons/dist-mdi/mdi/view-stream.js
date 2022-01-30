import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewStream",
    vendor: "Mdi",
    type: "",
    tags: ["view","stream"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-view-stream","innerHTML":"<path d='M4,5V11H21V5M4,18H21V12H4V18Z' />"},
    )
  }
}