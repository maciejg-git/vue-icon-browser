import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyFra",
    vendor: "Mdi",
    type: "",
    tags: ["currency","fra"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-fra"},
      [ 
        h(
          "path",
          {"d":"M18 5V3H7V16H5V18H7V21H9V18H13V16H9V13H17V11H9V5H18Z"}
        ) 
      ]
    )
  }
}