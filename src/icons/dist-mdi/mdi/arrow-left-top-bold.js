import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftTopBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","top","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-left-top-bold","innerHTML":"<path d='M21 21H17V13.5C17 11.57 15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5V21Z' />"},
    )
  }
}