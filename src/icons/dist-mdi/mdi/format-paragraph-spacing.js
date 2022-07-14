import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatParagraphSpacing",
    vendor: "Mdi",
    type: "",
    tags: ["format","paragraph","spacing"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-paragraph-spacing"},
      [ 
        h(
          "path",
          {"d":"M3 17H21V19H3V17M3 2H21V4H3V2M3 20H21V22H3V20M13 8H15L12 5L9 8H11V13H9L12 16L15 13H13V8Z"}
        ) 
      ]
    )
  }
}