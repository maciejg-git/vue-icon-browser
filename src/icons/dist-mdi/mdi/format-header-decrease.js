import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHeaderDecrease",
    vendor: "Mdi",
    type: "",
    tags: ["format","header","decrease"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-header-decrease"},
      [ 
        h(
          "path",
          {"d":"M4,4H6V10H10V4H12V18H10V12H6V18H4V4M20.42,7.41L16.83,11L20.42,14.59L19,16L14,11L19,6L20.42,7.41Z"}
        ) 
      ]
    )
  }
}