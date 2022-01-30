import { h } from 'vue'
export default {
  $_icon: {
    name: "Bucket",
    vendor: "Mdi",
    type: "",
    tags: ["bucket"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bucket","innerHTML":"<path d='M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z' />"},
    )
  }
}