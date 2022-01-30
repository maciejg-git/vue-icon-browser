import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-down-bold","innerHTML":"<path d='M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z' />"},
    )
  }
}