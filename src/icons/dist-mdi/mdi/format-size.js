import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatSize",
    vendor: "Mdi",
    type: "",
    tags: ["format","size"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-size"},
      [ 
        h(
          "path",
          {"d":"M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z"}
        ) 
      ]
    )
  }
}