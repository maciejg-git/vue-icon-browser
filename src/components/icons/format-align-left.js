import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignLeft",
    vendor: "Mdi",
    type: [],
    tags: ["format","align","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-align-left"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}