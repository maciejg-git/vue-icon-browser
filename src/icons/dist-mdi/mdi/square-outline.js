import { h } from 'vue'
export default {
  name: "SquareOutline",
  vendor: "Mdi",
  type: "",
  tags: ["square","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-square-outline","innerHTML":"<path d='M3,3H21V21H3V3M5,5V19H19V5H5Z' />"},
    )
  }
}