import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowCollapseVertical",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","collapse","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-collapse-vertical","innerHTML":"<path d='M4,12H20V14H4V12M4,9H20V11H4V9M16,4L12,8L8,4H11V1H13V4H16M8,19L12,15L16,19H13V22H11V19H8Z' />"},
    )
  }
}