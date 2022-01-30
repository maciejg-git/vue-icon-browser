import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyEth",
    vendor: "Mdi",
    type: "",
    tags: ["currency","eth"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-currency-eth","innerHTML":"<path d='M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5' />"},
    )
  }
}