import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignHorizontalCenter",
    vendor: "Mdi",
    type: "",
    tags: ["align","horizontal","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-align-horizontal-center","innerHTML":"<path d='M20 19H13V22H11V19H4V13H11V11H7V5H11V2H13V5H17V11H13V13H20V19Z' />"},
    )
  }
}