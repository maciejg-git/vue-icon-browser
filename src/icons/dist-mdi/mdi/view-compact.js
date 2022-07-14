import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewCompact",
    vendor: "Mdi",
    type: "",
    tags: ["view","compact"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-compact"},
      [ 
        h(
          "path",
          {"d":"M3,19H9V12H3V19M10,19H22V12H10V19M3,5V11H22V5H3Z"}
        ) 
      ]
    )
  }
}