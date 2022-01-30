import { h } from 'vue'
export default {
  $_icon: {
    name: "TransferDown",
    vendor: "Mdi",
    type: "",
    tags: ["transfer","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-transfer-down","innerHTML":"<path d='M16,3V5H8V3H16M16,7V9H8V7H16M16,11V13H8V11H16M5,15H19L12,22L5,15Z' />"},
    )
  }
}