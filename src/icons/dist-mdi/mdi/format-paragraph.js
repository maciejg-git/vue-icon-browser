import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatParagraph",
    vendor: "Mdi",
    type: "",
    tags: ["format","paragraph"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-paragraph"},
      [ 
        h(
          "path",
          {"d":"M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z"}
        ) 
      ]
    )
  }
}