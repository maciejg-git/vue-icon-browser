import { h } from 'vue'
export default {
  name: "Rewind",
  vendor: "Mdi",
  tags: ["rewind"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-rewind","innerHTML":"<path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' />"},
    )
  }
}