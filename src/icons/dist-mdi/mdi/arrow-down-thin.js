import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownThin",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-thin"},
      [ 
        h(
          "path",
          {"d":"M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z"}
        ) 
      ]
    )
  }
}