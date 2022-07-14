import { h } from 'vue'
export default {
  $_icon: {
    name: "ShippingPallet",
    vendor: "Mdi",
    type: "",
    tags: ["shipping","pallet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shipping-pallet"},
      [ 
        h(
          "path",
          {"d":"M3 20H5V18H11V20H13V18H19V20H21V15H19V16H17V15H15V16H13V15H11V16H9V15H7V16H5V15H3M5 13H19V4H5Z"}
        ) 
      ]
    )
  }
}