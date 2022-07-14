import { h } from 'vue'
export default {
  $_icon: {
    name: "ScanHelper",
    vendor: "Mdi",
    type: "",
    tags: ["scan","helper"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-scan-helper"},
      [ 
        h(
          "path",
          {"d":"M0 2A2 2 0 0 1 2 0H6V2H2V6H0V2M24 22A2 2 0 0 1 22 24H18V22H22V18H24V22M2 24A2 2 0 0 1 0 22V18H2V22H6V24H2M22 0A2 2 0 0 1 24 2V6H22V2H18V0H22Z"}
        ) 
      ]
    )
  }
}