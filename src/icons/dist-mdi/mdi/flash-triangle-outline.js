import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashTriangleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["flash","triangle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash-triangle-outline"},
      [ 
        h(
          "path",
          {"d":"M12 2L1 21H23M12 6L19.5 19H4.5M14 14H12.5L14 11H10V15H11V18L14 14Z"}
        ) 
      ]
    )
  }
}