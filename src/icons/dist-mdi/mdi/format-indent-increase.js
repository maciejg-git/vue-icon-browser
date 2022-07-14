import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatIndentIncrease",
    vendor: "Mdi",
    type: "",
    tags: ["format","indent","increase"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-indent-increase"},
      [ 
        h(
          "path",
          {"d":"M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z"}
        ) 
      ]
    )
  }
}