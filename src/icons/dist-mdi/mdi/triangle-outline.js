import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["triangle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-triangle-outline"},
      [ 
        h(
          "path",
          {"d":"M12,2L1,21H23M12,6L19.53,19H4.47"}
        ) 
      ]
    )
  }
}