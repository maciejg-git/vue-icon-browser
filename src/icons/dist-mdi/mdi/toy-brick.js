import { h } from 'vue'
export default {
  $_icon: {
    name: "ToyBrick",
    vendor: "Mdi",
    type: "",
    tags: ["toy","brick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-toy-brick","innerHTML":"<path d='M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6Z' />"},
    )
  }
}