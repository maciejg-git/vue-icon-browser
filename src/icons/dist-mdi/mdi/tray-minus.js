import { h } from 'vue'
export default {
  name: "TrayMinus",
  vendor: "Mdi",
  type: "",
  tags: ["tray","minus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-tray-minus","innerHTML":"<path d='M16 10H8V8H16M2 17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V12H20V17H4V12H2Z' />"},
    )
  }
}