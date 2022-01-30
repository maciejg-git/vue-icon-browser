import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownThick",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-down-thick","innerHTML":"<path d='M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z' />"},
    )
  }
}