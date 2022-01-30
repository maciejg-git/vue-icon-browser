import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumePlus",
    vendor: "Mdi",
    type: "",
    tags: ["volume","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-volume-plus","innerHTML":"<path d='M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z' />"},
    )
  }
}