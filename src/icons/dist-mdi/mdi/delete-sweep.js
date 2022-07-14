import { h } from 'vue'
export default {
  $_icon: {
    name: "DeleteSweep",
    vendor: "Mdi",
    type: "",
    tags: ["delete","sweep"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-delete-sweep"},
      [ 
        h(
          "path",
          {"d":"M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18A2,2 0 0,0 5,20H11A2,2 0 0,0 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z"}
        ) 
      ]
    )
  }
}