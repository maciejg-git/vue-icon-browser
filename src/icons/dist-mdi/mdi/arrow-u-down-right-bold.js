import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUDownRightBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","u","down","right","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-u-down-right-bold"},
      [ 
        h(
          "path",
          {"d":"M10.5 3C14.64 3 18 6.36 18 10.5V13H22L16 20L10 13H14V10.5C14 8.57 12.43 7 10.5 7S7 8.57 7 10.5V18H3V10.5C3 6.36 6.36 3 10.5 3Z"}
        ) 
      ]
    )
  }
}