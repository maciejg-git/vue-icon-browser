import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeThermometer",
    vendor: "Mdi",
    type: "",
    tags: ["home","thermometer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-thermometer","innerHTML":"<path d='M12 3L2 12H5V20H19V12H22L12 3M12 8A1 1 0 0 1 13 9V14.27A2 2 0 0 1 14 16A2 2 0 0 1 12 18A2 2 0 0 1 10 16A2 2 0 0 1 11 14.27V9A1 1 0 0 1 12 8Z' />"},
    )
  }
}