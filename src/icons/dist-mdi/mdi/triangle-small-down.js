import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleSmallDown",
    vendor: "Mdi",
    type: "",
    tags: ["triangle","small","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-triangle-small-down","innerHTML":"<path d='M8 9H16L12 16' />"},
    )
  }
}