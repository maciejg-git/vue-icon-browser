import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashTriangle",
    vendor: "Mdi",
    type: "",
    tags: ["flash","triangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash-triangle"},
      [ 
        h(
          "path",
          {"d":"M12 2L1 21H23L12 2M10 15V10H14L12.5 13.5H14.5L11.5 19V15H10Z"}
        ) 
      ]
    )
  }
}