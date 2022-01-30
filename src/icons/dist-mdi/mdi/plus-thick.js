import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusThick",
    vendor: "Mdi",
    type: "",
    tags: ["plus","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-plus-thick","innerHTML":"<path d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' />"},
    )
  }
}