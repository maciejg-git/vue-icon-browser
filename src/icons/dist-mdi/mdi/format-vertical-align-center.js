import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatVerticalAlignCenter",
    vendor: "Mdi",
    type: "",
    tags: ["format","vertical","align","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-vertical-align-center"},
      [ 
        h(
          "path",
          {"d":"M8,19H11V23H13V19H16L12,15L8,19M16,5H13V1H11V5H8L12,9L16,5M4,11V13H20V11H4Z"}
        ) 
      ]
    )
  }
}