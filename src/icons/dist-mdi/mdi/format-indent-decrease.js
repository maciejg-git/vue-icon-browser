import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatIndentDecrease",
    vendor: "Mdi",
    type: "",
    tags: ["format","indent","decrease"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-indent-decrease"},
      [ 
        h(
          "path",
          {"d":"M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z"}
        ) 
      ]
    )
  }
}