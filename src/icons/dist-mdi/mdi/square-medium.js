import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMedium",
    vendor: "Mdi",
    type: "",
    tags: ["square","medium"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-square-medium","innerHTML":"<path d='M16,8H8V16H16V8Z' />"},
    )
  }
}