import { h } from 'vue'
export default {
  $_icon: {
    name: "VanishQuarter",
    vendor: "Mdi",
    type: "",
    tags: ["vanish","quarter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-vanish-quarter","innerHTML":"<path d='M11 3H13V8H11V3M4.9 6.3L6.3 4.9L9.1 7.7L7.8 9.2L4.9 6.3M8 13H3V11H8V13' />"},
    )
  }
}