import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRight",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","top","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-top-right","innerHTML":"<path d='M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z' />"},
    )
  }
}