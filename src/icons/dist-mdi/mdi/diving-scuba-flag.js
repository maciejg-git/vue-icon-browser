import { h } from 'vue'
export default {
  name: "DivingScubaFlag",
  vendor: "Mdi",
  tags: ["diving","scuba","flag"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-diving-scuba-flag","innerHTML":"<path d='M2,6L19,20H2V6M5,4L22,18V4H5Z' />"},
    )
  }
}