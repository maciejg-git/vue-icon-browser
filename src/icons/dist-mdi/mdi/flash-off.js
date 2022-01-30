import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashOff",
    vendor: "Mdi",
    type: "",
    tags: ["flash","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-flash-off","innerHTML":"<path d='M17,10H13L17,2H7V4.18L15.46,12.64M3.27,3L2,4.27L7,9.27V13H10V22L13.58,15.86L17.73,20L19,18.73L3.27,3Z' />"},
    )
  }
}