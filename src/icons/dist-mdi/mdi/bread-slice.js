import { h } from 'vue'
export default {
  $_icon: {
    name: "BreadSlice",
    vendor: "Mdi",
    type: "",
    tags: ["bread","slice"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bread-slice","innerHTML":"<path d='M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z' />"},
    )
  }
}