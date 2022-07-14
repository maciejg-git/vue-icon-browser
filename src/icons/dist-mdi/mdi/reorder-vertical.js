import { h } from 'vue'
export default {
  $_icon: {
    name: "ReorderVertical",
    vendor: "Mdi",
    type: "",
    tags: ["reorder","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-reorder-vertical"},
      [ 
        h(
          "path",
          {"d":"M9,3V21H11V3H9M5,3V21H7V3H5M13,3V21H15V3H13M19,3H17V21H19V3Z"}
        ) 
      ]
    )
  }
}