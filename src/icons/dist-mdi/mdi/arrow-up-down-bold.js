import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpDownBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","up","down","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-up-down-bold","innerHTML":"<path d='M10,8H6L12,2L18,8H14V16H18L12,22L6,16H10V8Z' />"},
    )
  }
}