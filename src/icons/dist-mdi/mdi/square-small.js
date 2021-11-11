import { h } from 'vue'
export default {
  name: "SquareSmall",
  vendor: "Mdi",
  type: "",
  tags: ["square","small"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-square-small","innerHTML":"<path d='M10,14V10H14V14H10Z' />"},
    )
  }
}