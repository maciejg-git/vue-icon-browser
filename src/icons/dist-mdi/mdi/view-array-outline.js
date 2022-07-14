import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewArrayOutline",
    vendor: "Mdi",
    type: "",
    tags: ["view","array","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-array-outline"},
      [ 
        h(
          "path",
          {"d":"M15 7V16H10V7H15M21 5H18V18H21V5M17 5H8V18H17V5M7 5H4V18H7V5Z"}
        ) 
      ]
    )
  }
}