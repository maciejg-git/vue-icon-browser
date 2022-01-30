import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeSource",
    vendor: "Mdi",
    type: "",
    tags: ["volume","source"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-volume-source","innerHTML":"<path d='M3 9V15H7L12 20V4L7 9H3M16 15H14V9H16V15M20 19H18V5H20V19Z' />"},
    )
  }
}