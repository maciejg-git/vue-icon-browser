import { h } from 'vue'
export default {
  name: "TableSplitCell",
  vendor: "Mdi",
  type: "",
  tags: ["table","split","cell"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-table-split-cell","innerHTML":"<path d='M19 14H21V20H3V14H5V18H19V14M3 4V10H5V6H19V10H21V4H3M11 11V13H8V15L5 12L8 9V11H11M16 11V9L19 12L16 15V13H13V11H16Z' />"},
    )
  }
}