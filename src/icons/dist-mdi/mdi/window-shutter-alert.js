import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowShutterAlert",
    vendor: "Mdi",
    type: "",
    tags: ["window","shutter","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-window-shutter-alert","innerHTML":"<path d='M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z' />"},
    )
  }
}