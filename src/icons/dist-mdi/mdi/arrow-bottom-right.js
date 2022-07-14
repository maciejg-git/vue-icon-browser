import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomRight",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-bottom-right"},
      [ 
        h(
          "path",
          {"d":"M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z"}
        ) 
      ]
    )
  }
}