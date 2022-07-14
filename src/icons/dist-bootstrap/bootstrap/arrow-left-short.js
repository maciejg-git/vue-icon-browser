import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftShort",
    vendor: "B",
    type: "",
    tags: ["arrow","left","short"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-left-short"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"}
        ) 
      ]
    )
  }
}