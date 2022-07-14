import { h } from 'vue'
export default {
  $_icon: {
    name: "DragVerticalVariant",
    vendor: "Mdi",
    type: "",
    tags: ["drag","vertical","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-drag-vertical-variant"},
      [ 
        h(
          "path",
          {"d":"M11 21H9V3H11V21M15 3H13V21H15V3Z"}
        ) 
      ]
    )
  }
}