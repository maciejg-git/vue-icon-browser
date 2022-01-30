import { h } from 'vue'
export default {
  $_icon: {
    name: "Send",
    vendor: "Mdi",
    type: "",
    tags: ["send"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-send","innerHTML":"<path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />"},
    )
  }
}