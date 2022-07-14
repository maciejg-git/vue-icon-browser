import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownRightCircleFill",
    vendor: "B",
    type: "",
    tags: ["arrow","down","right","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-down-right-circle-fill"},
      [ 
        h(
          "path",
          {"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"}
        ) 
      ]
    )
  }
}