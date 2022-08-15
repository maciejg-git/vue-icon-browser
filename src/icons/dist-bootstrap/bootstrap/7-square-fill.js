import { h } from 'vue'
export default {
  $_icon: {
    name: "7SquareFill",
    vendor: "B",
    type: "",
    tags: ["7","square","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-7-square-fill"},
      [ 
        h(
          "path",
          {"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"}
        ) 
      ]
    )
  }
}