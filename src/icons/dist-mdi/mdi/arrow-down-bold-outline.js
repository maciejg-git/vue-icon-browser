import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBoldOutline",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-bold-outline"},
      [ 
        h(
          "path",
          {"d":"M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z"}
        ) 
      ]
    )
  }
}