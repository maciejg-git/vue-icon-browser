import { h } from 'vue'
export default {
  $_icon: {
    name: "FullscreenExit",
    vendor: "Mdi",
    type: "",
    tags: ["fullscreen","exit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-fullscreen-exit","innerHTML":"<path d='M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z' />"},
    )
  }
}