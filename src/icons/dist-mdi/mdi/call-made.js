import { h } from 'vue'
export default {
  $_icon: {
    name: "CallMade",
    vendor: "Mdi",
    type: "",
    tags: ["call","made"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-call-made","innerHTML":"<path d='M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5' />"},
    )
  }
}