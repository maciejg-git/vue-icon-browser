import { h } from 'vue'
export default {
  $_icon: {
    name: "XLg",
    vendor: "B",
    type: "",
    tags: ["x","lg"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-x-lg"},
      [ 
        h(
          "path",
          {"d":"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}
        ) 
      ]
    )
  }
}