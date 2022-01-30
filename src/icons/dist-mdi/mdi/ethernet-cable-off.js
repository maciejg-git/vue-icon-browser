import { h } from 'vue'
export default {
  $_icon: {
    name: "EthernetCableOff",
    vendor: "Mdi",
    type: "",
    tags: ["ethernet","cable","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-ethernet-cable-off","innerHTML":"<path d='M11,3H13V7H11V3M8,4H10V8H14V4H16V11H12.82L8,6.18V4M20,20.72L18.73,22L14,17.27V22H10V13.27L2,5.27L3.28,4L20,20.72Z' />"},
    )
  }
}