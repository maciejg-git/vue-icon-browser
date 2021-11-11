import { h } from 'vue'
export default {
  name: "Pause",
  vendor: "Mdi",
  type: "",
  tags: ["pause"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pause","innerHTML":"<path d='M14,19H18V5H14M6,19H10V5H6V19Z' />"},
    )
  }
}