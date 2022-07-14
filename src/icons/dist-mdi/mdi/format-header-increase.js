import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHeaderIncrease",
    vendor: "Mdi",
    type: "",
    tags: ["format","header","increase"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-header-increase"},
      [ 
        h(
          "path",
          {"d":"M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14.59,7.41L18.17,11L14.59,14.59L16,16L21,11L16,6L14.59,7.41Z"}
        ) 
      ]
    )
  }
}