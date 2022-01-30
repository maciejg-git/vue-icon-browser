import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "Mdi",
    type: "",
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-minus","innerHTML":"<path d='M19,13H5V11H19V13Z' />"},
    )
  }
}