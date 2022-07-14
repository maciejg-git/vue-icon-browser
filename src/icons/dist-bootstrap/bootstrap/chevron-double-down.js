import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleDown",
    vendor: "B",
    type: "",
    tags: ["chevron","double","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-chevron-double-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}
        ) 
      ]
    )
  }
}