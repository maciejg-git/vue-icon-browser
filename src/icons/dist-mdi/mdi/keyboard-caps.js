import { h } from 'vue'
export default {
  name: "KeyboardCaps",
  vendor: "Mdi",
  type: "",
  tags: ["keyboard","caps"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-keyboard-caps","innerHTML":"<path d='M6,18H18V16H6M12,8.41L16.59,13L18,11.58L12,5.58L6,11.58L7.41,13L12,8.41Z' />"},
    )
  }
}