import { h } from 'vue'
export default {
  $_icon: {
    name: "Pause",
    vendor: "Mdi",
    type: "",
    tags: ["pause"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pause"},
      [ 
        h(
          "path",
          {"d":"M14,19H18V5H14M6,19H10V5H6V19Z"}
        ) 
      ]
    )
  }
}