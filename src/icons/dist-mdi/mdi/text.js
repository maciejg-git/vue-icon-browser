import { h } from 'vue'
export default {
  name: "Text",
  vendor: "Mdi",
  type: "",
  tags: ["text"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-text","innerHTML":"<path d='M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z' />"},
    )
  }
}