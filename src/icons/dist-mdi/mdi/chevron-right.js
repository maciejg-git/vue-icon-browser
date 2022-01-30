import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronRight",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-chevron-right","innerHTML":"<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />"},
    )
  }
}