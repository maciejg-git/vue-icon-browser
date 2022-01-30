import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagTriangle",
    vendor: "Mdi",
    type: "",
    tags: ["flag","triangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-flag-triangle","innerHTML":"<path d='M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z' />"},
    )
  }
}