import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartHistogram",
    vendor: "Mdi",
    type: "",
    tags: ["chart","histogram"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chart-histogram"},
      [ 
        h(
          "path",
          {"d":"M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z"}
        ) 
      ]
    )
  }
}