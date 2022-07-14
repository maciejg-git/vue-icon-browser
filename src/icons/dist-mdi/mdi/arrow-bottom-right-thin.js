import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomRightThin",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","bottom","right","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-bottom-right-thin"},
      [ 
        h(
          "path",
          {"d":"M11.93 19L14.76 16.18L5 6.42L6.42 5L16.18 14.76L19 11.94V19Z"}
        ) 
      ]
    )
  }
}