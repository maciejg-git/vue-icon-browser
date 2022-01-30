import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightThick",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","right","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-right-thick","innerHTML":"<path d='M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z' />"},
    )
  }
}