import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeMinus",
    vendor: "Mdi",
    type: "",
    tags: ["home","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-minus","innerHTML":"<path d='M12,3L2,12H5V20H19V12H22L12,3M16,13V15H8V13H16Z' />"},
    )
  }
}