import { h } from 'vue'
export default {
  $_icon: {
    name: "Diamond",
    vendor: "Mdi",
    type: "",
    tags: ["diamond"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-diamond"},
      [ 
        h(
          "path",
          {"d":"M6,2L2,8L12,22L22,8L18,2H6Z"}
        ) 
      ]
    )
  }
}