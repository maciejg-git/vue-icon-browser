import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopLeft",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","top","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-top-left"},
      [ 
        h(
          "path",
          {"d":"M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z"}
        ) 
      ]
    )
  }
}