import { h } from 'vue'
export default {
  $_icon: {
    name: "UploadMultiple",
    vendor: "Mdi",
    type: "",
    tags: ["upload","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-upload-multiple","innerHTML":"<path d='M9,14V8H5L12,1L19,8H15V14H9M5,18V16H19V18H5M19,20H5V22H19V20Z' />"},
    )
  }
}