import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF4",
    vendor: "Mdi",
    type: "",
    tags: ["keyboard","f4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-keyboard-f4","innerHTML":"<path d='M5 7H11V9H7V11H10V13H7V17H5V7M13 7H15V11H17V7H19V17H17V13H13V7Z' />"},
    )
  }
}