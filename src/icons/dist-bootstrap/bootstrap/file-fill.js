import { h } from 'vue'
export default {
  $_icon: {
    name: "FileFill",
    vendor: "B",
    type: "",
    tags: ["file","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-file-fill"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"}
        ) 
      ]
    )
  }
}