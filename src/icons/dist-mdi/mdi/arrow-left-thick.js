import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftThick",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-left-thick","innerHTML":"<path d='M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z' />"},
    )
  }
}