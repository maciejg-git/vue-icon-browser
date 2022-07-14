import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAnnotationPlus",
    vendor: "Mdi",
    type: "",
    tags: ["format","annotation","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-annotation-plus"},
      [ 
        h(
          "path",
          {"d":"M8.5,7H10.5L16,21H13.6L12.5,18H6.3L5.2,21H3L8.5,7M7.1,16H11.9L9.5,9.7L7.1,16M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"}
        ) 
      ]
    )
  }
}