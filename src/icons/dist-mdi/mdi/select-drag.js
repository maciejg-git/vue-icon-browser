import { h } from 'vue'
export default {
  $_icon: {
    name: "SelectDrag",
    vendor: "Mdi",
    type: "",
    tags: ["select","drag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-select-drag","innerHTML":"<path d='M13,17H17V13H19V17H23V19H19V23H17V19H13V17M11,17V19H9V17H11M7,17V19H5V17H7M19,9V11H17V9H19M19,5V7H17V5H19M15,5V7H13V5H15M11,5V7H9V5H11M7,5V7H5V5H7M7,13V15H5V13H7M7,9V11H5V9H7Z' />"},
    )
  }
}