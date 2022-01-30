import { h } from 'vue'
export default {
  $_icon: {
    name: "ExclamationThick",
    vendor: "Mdi",
    type: "",
    tags: ["exclamation","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-exclamation-thick","innerHTML":"<path d='M10 3H14V14H10V3M10 21V17H14V21H10Z' />"},
    )
  }
}