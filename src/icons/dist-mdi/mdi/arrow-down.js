import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDown",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-down","innerHTML":"<path d='M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z' />"},
    )
  }
}