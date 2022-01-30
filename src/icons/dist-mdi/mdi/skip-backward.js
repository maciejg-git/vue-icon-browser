import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipBackward",
    vendor: "Mdi",
    type: "",
    tags: ["skip","backward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-skip-backward","innerHTML":"<path d='M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12' />"},
    )
  }
}