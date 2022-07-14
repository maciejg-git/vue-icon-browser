import { h } from 'vue'
export default {
  $_icon: {
    name: "Triangle",
    vendor: "Mdi",
    type: "",
    tags: ["triangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-triangle"},
      [ 
        h(
          "path",
          {"d":"M1,21H23L12,2"}
        ) 
      ]
    )
  }
}