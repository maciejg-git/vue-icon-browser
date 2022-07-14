import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronBarDown",
    vendor: "B",
    type: "",
    tags: ["chevron","bar","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-chevron-bar-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"}
        ) 
      ]
    )
  }
}