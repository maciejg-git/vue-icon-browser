import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","right","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-right-bold","innerHTML":"<path d='M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z' />"},
    )
  }
}