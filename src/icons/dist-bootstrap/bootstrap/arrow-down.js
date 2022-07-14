import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDown",
    vendor: "B",
    type: "",
    tags: ["arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"}
        ) 
      ]
    )
  }
}