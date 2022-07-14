import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareFill",
    vendor: "B",
    type: "",
    tags: ["square","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-square-fill"},
      [ 
        h(
          "path",
          {"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"}
        ) 
      ]
    )
  }
}