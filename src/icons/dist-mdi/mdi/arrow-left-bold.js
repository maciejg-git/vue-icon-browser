import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-left-bold","innerHTML":"<path d='M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z' />"},
    )
  }
}