import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewSplitHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["view","split","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-split-horizontal"},
      [ 
        h(
          "path",
          {"d":"M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z"}
        ) 
      ]
    )
  }
}