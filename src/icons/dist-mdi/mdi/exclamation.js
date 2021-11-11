import { h } from 'vue'
export default {
  name: "Exclamation",
  vendor: "Mdi",
  type: "",
  tags: ["exclamation"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-exclamation","innerHTML":"<path d='M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z' />"},
    )
  }
}