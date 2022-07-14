import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleSmallUp",
    vendor: "Mdi",
    type: "",
    tags: ["triangle","small","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-triangle-small-up"},
      [ 
        h(
          "path",
          {"d":"M8 15H16L12 8"}
        ) 
      ]
    )
  }
}