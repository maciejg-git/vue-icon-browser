import { h } from 'vue'
export default {
  $_icon: {
    name: "Dash",
    vendor: "B",
    type: "",
    tags: ["dash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-dash"},
      [ 
        h(
          "path",
          {"d":"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}
        ) 
      ]
    )
  }
}