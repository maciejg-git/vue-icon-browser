import { h } from 'vue'
export default {
  $_icon: {
    name: "PowerSocket",
    vendor: "Mdi",
    type: "",
    tags: ["power","socket"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-power-socket","innerHTML":"<path d='M15,15H17V11H15M7,15H9V11H7M11,13H13V9H11M8.83,7H15.2L19,10.8V17H5V10.8M8,5L3,10V19H21V10L16,5H8Z' />"},
    )
  }
}