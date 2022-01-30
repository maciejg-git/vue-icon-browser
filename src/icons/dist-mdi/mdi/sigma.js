import { h } from 'vue'
export default {
  $_icon: {
    name: "Sigma",
    vendor: "Mdi",
    type: "",
    tags: ["sigma"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-sigma","innerHTML":"<path d='M18,6H8.83L14.83,12L8.83,18H18V20H6V18L12,12L6,6V4H18V6Z' />"},
    )
  }
}