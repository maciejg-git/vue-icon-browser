import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignVerticalTop",
    vendor: "Mdi",
    type: "",
    tags: ["align","vertical","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-align-vertical-top"},
      [ 
        h(
          "path",
          {"d":"M22 2V4H2V2H22M7 22H10V6H7V22M14 16H17V6H14V16Z"}
        ) 
      ]
    )
  }
}