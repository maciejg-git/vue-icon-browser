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
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-cny"},
      [ 
        h(
          "path",
          {"d":"M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z"}
        ) 
      ]
    )
  }
}