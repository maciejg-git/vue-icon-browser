import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyKzt",
    vendor: "Mdi",
    type: "",
    tags: ["currency","kzt"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-kzt"},
      [ 
        h(
          "path",
          {"d":"M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z"}
        ) 
      ]
    )
  }
}