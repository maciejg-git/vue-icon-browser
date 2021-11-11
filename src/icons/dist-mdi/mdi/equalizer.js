import { h } from 'vue'
export default {
  name: "Equalizer",
  vendor: "Mdi",
  type: "",
  tags: ["equalizer"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-equalizer","innerHTML":"<path d='M10,20H14V4H10V20M4,20H8V12H4V20M16,9V20H20V9H16Z' />"},
    )
  }
}