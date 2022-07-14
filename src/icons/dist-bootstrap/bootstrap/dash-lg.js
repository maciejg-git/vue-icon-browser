import { h } from 'vue'
export default {
  $_icon: {
    name: "DashLg",
    vendor: "B",
    type: "",
    tags: ["dash","lg"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-dash-lg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}
        ) 
      ]
    )
  }
}