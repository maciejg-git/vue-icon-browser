import { h } from 'vue'
export default {
  $_icon: {
    name: "TallyMark3",
    vendor: "Mdi",
    type: "",
    tags: ["tally","mark","3"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tally-mark-3"},
      [ 
        h(
          "path",
          {"d":"M9 19H7V5H9V19M13 5H11V19H13V5M17 5H15V19H17V5Z"}
        ) 
      ]
    )
  }
}