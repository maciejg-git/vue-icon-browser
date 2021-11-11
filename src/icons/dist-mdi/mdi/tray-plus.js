import { h } from 'vue'
export default {
  name: "TrayPlus",
  vendor: "Mdi",
  type: "",
  tags: ["tray","plus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-tray-plus","innerHTML":"<path d='M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M11 5H13V8H16V10H13V13H11V10H8V8H11Z' />"},
    )
  }
}