import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftRightBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","right","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-left-right-bold"},
      [ 
        h(
          "path",
          {"d":"M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z"}
        ) 
      ]
    )
  }
}