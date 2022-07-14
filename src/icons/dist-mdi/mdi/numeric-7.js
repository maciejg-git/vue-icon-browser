import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric7",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","7"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-7"},
      [ 
        h(
          "path",
          {"d":"M11,17L15,9V7H9V9H13L9,17"}
        ) 
      ]
    )
  }
}