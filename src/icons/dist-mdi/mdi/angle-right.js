import { h } from 'vue'
export default {
  $_icon: {
    name: "AngleRight",
    vendor: "Mdi",
    type: "",
    tags: ["angle","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-angle-right","innerHTML":"<path d='M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z' />"},
    )
  }
}