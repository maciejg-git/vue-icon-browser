import { h } from 'vue'
export default {
  $_icon: {
    name: "TabletFill",
    vendor: "B",
    type: "",
    tags: ["tablet","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-tablet-fill"},
      [ 
        h(
          "path",
          {"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"}
        ) 
      ]
    )
  }
}