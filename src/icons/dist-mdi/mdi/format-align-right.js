import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignRight",
    vendor: "Mdi",
    type: "",
    tags: ["format","align","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-align-right"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}