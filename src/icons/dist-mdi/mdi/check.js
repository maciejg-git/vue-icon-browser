import { h } from 'vue'
export default {
  $_icon: {
    name: "Check",
    vendor: "Mdi",
    type: "",
    tags: ["check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-check","innerHTML":"<path d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' />"},
    )
  }
}