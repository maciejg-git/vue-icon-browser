import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-chevron-up","innerHTML":"<path d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z' />"},
    )
  }
}