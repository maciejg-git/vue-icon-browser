import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRightBottomLeftBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","top","right","bottom","left","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-top-right-bottom-left-bold"},
      [ 
        h(
          "path",
          {"d":"M18.17,8.66L21,11.5V3H12.5L15.34,5.83L5.83,15.34L3,12.5V21H11.5L8.66,18.17L18.17,8.66Z"}
        ) 
      ]
    )
  }
}