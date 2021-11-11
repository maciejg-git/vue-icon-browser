import { h } from 'vue'
export default {
  name: "Play",
  vendor: "Mdi",
  type: "",
  tags: ["play"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-play","innerHTML":"<path d='M8,5.14V19.14L19,12.14L8,5.14Z' />"},
    )
  }
}