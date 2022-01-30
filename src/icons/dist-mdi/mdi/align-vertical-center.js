import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignVerticalCenter",
    vendor: "Mdi",
    type: "",
    tags: ["align","vertical","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-align-vertical-center","innerHTML":"<path d='M5 20V13H2V11H5V4H11V11H13V7H19V11H22V13H19V17H13V13H11V20H5Z' />"},
    )
  }
}