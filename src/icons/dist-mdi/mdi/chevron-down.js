import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDown",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-chevron-down","innerHTML":"<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />"},
    )
  }
}