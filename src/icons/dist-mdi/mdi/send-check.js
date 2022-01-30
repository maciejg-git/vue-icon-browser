import { h } from 'vue'
export default {
  $_icon: {
    name: "SendCheck",
    vendor: "Mdi",
    type: "",
    tags: ["send","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-send-check","innerHTML":"<path d='M2 3V10L17 12L2 14V21L23 12M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z' />"},
    )
  }
}