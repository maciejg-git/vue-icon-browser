import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardMultiple",
    vendor: "Mdi",
    type: "",
    tags: ["credit","card","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-multiple"},
      [ 
        h(
          "path",
          {"d":"M21 9V6H7V9H21M21 3A2 2 0 0 1 23 5V15A2 2 0 0 1 21 17H7A2 2 0 0 1 5 15V5A2 2 0 0 1 7 3H21M3 19H18V21H3A2 2 0 0 1 1 19V8H3Z"}
        ) 
      ]
    )
  }
}