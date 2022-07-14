import { h } from 'vue'
export default {
  $_icon: {
    name: "CompareHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["compare","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-compare-horizontal"},
      [ 
        h(
          "path",
          {"d":"M9 14H2V16H9V19L13 15L9 11V14M15 13V10H22V8H15V5L11 9L15 13Z"}
        ) 
      ]
    )
  }
}