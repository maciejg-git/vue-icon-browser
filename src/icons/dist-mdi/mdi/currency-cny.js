import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyCny",
    vendor: "Mdi",
    type: "",
    tags: ["currency","cny"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-currency-cny","innerHTML":"<path d='M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z' />"},
    )
  }
}