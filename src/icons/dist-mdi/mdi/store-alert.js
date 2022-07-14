import { h } from 'vue'
export default {
  $_icon: {
    name: "StoreAlert",
    vendor: "Mdi",
    type: "",
    tags: ["store","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-store-alert"},
      [ 
        h(
          "path",
          {"d":"M2 7L1 12V14H2V20H12V14H16V20H18V14H19V12L18 7H2M10 18H4V14H10V18M18 6H2V4H18V6M23 7V13H21V7H23M21 15H23V17H21V15Z"}
        ) 
      ]
    )
  }
}