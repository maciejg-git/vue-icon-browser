import { h } from 'vue'
export default {
  $_icon: {
    name: "TallyMark1",
    vendor: "Mdi",
    type: "",
    tags: ["tally","mark","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tally-mark-1"},
      [ 
        h(
          "path",
          {"d":"M13 19H11V5H13V19Z"}
        ) 
      ]
    )
  }
}