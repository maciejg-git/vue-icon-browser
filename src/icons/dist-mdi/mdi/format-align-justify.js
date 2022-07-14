import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignJustify",
    vendor: "Mdi",
    type: "",
    tags: ["format","align","justify"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-align-justify"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}