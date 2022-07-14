import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatWrapInline",
    vendor: "Mdi",
    type: "",
    tags: ["format","wrap","inline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-wrap-inline"},
      [ 
        h(
          "path",
          {"d":"M8,7L13,17H3L8,7M3,3H21V5H3V3M21,15V17H14V15H21M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}