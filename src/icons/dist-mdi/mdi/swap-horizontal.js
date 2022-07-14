import { h } from 'vue'
export default {
  $_icon: {
    name: "SwapHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["swap","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-swap-horizontal"},
      [ 
        h(
          "path",
          {"d":"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"}
        ) 
      ]
    )
  }
}