import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomLeft",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","bottom","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-bottom-left"},
      [ 
        h(
          "path",
          {"d":"M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"}
        ) 
      ]
    )
  }
}