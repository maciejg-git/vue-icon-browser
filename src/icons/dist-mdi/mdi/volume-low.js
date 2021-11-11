import { h } from 'vue'
export default {
  name: "VolumeLow",
  vendor: "Mdi",
  type: "",
  tags: ["volume","low"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-volume-low","innerHTML":"<path d='M7,9V15H11L16,20V4L11,9H7Z' />"},
    )
  }
}