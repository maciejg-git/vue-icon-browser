import { h } from 'vue'
export default {
  name: "Home",
  vendor: "Mdi",
  type: "",
  tags: ["home"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home","innerHTML":"<path d='M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z' />"},
    )
  }
}