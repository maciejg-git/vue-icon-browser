import { h } from 'vue'
export default {
  name: "TooltipMinusOutline",
  vendor: "Mdi",
  type: "",
  tags: ["tooltip","minus","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-tooltip-minus-outline","innerHTML":"<path d='M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H15.17L12 19.17L8.83 16H4V4H20V16M16 11H8V9H16V11Z' />"},
    )
  }
}