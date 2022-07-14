import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLeft",
    vendor: "B",
    type: "",
    tags: ["arrow","down","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-down-left"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"}
        ) 
      ]
    )
  }
}