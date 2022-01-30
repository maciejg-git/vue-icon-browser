import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckBold",
    vendor: "Mdi",
    type: "",
    tags: ["check","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-check-bold","innerHTML":"<path d='M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z' />"},
    )
  }
}