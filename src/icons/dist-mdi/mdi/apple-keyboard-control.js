import { h } from 'vue'
export default {
  $_icon: {
    name: "AppleKeyboardControl",
    vendor: "Mdi",
    type: "",
    tags: ["apple","keyboard","control"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-apple-keyboard-control","innerHTML":"<path d='M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z' />"},
    )
  }
}