import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardScanOutline",
    vendor: "Mdi",
    type: "",
    tags: ["credit","card","scan","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-scan-outline"},
      [ 
        h(
          "path",
          {"d":"M2,4H6V2H2A2,2 0 0,0 0,4V8H2V4M22,2H18V4H22V8H24V4A2,2 0 0,0 22,2M2,16H0V20A2,2 0 0,0 2,22H6V20H2V16M22,20H18V22H22A2,2 0 0,0 24,20V16H22V20M4,8V16A2,2 0 0,0 6,18H18A2,2 0 0,0 20,16V8A2,2 0 0,0 18,6H6A2,2 0 0,0 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z"}
        ) 
      ]
    )
  }
}