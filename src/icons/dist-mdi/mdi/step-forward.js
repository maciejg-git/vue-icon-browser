import { h } from 'vue'
export default {
  name: "StepForward",
  vendor: "Mdi",
  type: "",
  tags: ["step","forward"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-step-forward","innerHTML":"<path d='M5,5V19H8V5M10,5V19L21,12' />"},
    )
  }
}