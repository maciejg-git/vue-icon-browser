import { h } from 'vue'
export default {
  name: "FloorPlan",
  vendor: "Mdi",
  type: "",
  tags: ["floor","plan"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-floor-plan","innerHTML":"<path d='M10,5V10H9V5H5V13H9V12H10V17H9V14H5V19H12V17H13V19H19V17H21V21H3V3H21V15H19V10H13V15H12V9H19V5H10Z' />"},
    )
  }
}