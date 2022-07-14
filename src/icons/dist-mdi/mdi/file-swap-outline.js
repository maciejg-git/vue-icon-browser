import { h } from 'vue'
export default {
  $_icon: {
    name: "FileSwapOutline",
    vendor: "Mdi",
    type: "",
    tags: ["file","swap","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-swap-outline"},
      [ 
        h(
          "path",
          {"d":"M17 15L14 12V14H10V12L7 15L10 18V16H14V18M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18Z"}
        ) 
      ]
    )
  }
}