import { h } from 'vue'
export default {
  $_icon: {
    name: "FileOutline",
    vendor: "Mdi",
    type: "",
    tags: ["file","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-file-outline","innerHTML":"<path d='M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z' />"},
    )
  }
}