import { h } from 'vue'
export default {
  $_icon: {
    name: "Resistor",
    vendor: "Mdi",
    type: "",
    tags: ["resistor"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-resistor","innerHTML":"<path d='M2,11H7L10.07,15.35L13.11,4L18,11H22V13H17L13.93,8.65L10.89,20L6,13H2V11Z' />"},
    )
  }
}