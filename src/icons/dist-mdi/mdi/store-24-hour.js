import { h } from 'vue'
export default {
  $_icon: {
    name: "Store24Hour",
    vendor: "Mdi",
    type: "",
    tags: ["store","24","hour"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-store-24-hour"},
      [ 
        h(
          "path",
          {"d":"M16,12H15V10H13V7H14V9H15V7H16M11,10H9V11H11V12H8V9H10V8H8V7H11M19,7V4H5V7H2V20H10V16H14V20H22V7H19Z"}
        ) 
      ]
    )
  }
}