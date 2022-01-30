import { h } from 'vue'
export default {
  $_icon: {
    name: "Nail",
    vendor: "Mdi",
    type: "",
    tags: ["nail"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-nail","innerHTML":"<path d='M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z' />"},
    )
  }
}