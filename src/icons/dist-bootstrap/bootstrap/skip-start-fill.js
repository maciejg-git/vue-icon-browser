import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipStartFill",
    vendor: "B",
    type: "",
    tags: ["skip","start","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-skip-start-fill"},
      [ 
        h(
          "path",
          {"d":"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"}
        ) 
      ]
    )
  }
}