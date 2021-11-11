import { h } from 'vue'
export default {
  name: "PlusOutline",
  vendor: "Mdi",
  type: "",
  tags: ["plus","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-plus-outline","innerHTML":"<path d='M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z' />"},
    )
  }
}