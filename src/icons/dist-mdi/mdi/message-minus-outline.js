import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageMinusOutline",
    vendor: "Mdi",
    type: "",
    tags: ["message","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-message-minus-outline","innerHTML":"<path d='M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M8 9V11H16V9H8Z' />"},
    )
  }
}