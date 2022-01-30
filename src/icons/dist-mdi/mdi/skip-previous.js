import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipPrevious",
    vendor: "Mdi",
    type: "",
    tags: ["skip","previous"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-skip-previous","innerHTML":"<path d='M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z' />"},
    )
  }
}