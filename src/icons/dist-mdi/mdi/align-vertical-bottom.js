import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignVerticalBottom",
    vendor: "Mdi",
    type: "",
    tags: ["align","vertical","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-align-vertical-bottom"},
      [ 
        h(
          "path",
          {"d":"M22 22H2V20H22V22M10 2H7V18H10V2M17 8H14V18H17V8Z"}
        ) 
      ]
    )
  }
}