import { h } from 'vue'
export default {
  $_icon: {
    name: "TallyMark4",
    vendor: "Mdi",
    type: "",
    tags: ["tally","mark","4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tally-mark-4"},
      [ 
        h(
          "path",
          {"d":"M7 19H5V5H7V19M11 5H9V19H11V5M15 5H13V19H15V5M19 5H17V19H19V5Z"}
        ) 
      ]
    )
  }
}