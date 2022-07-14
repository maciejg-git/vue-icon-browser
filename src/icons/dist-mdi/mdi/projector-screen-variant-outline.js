import { h } from 'vue'
export default {
  $_icon: {
    name: "ProjectorScreenVariantOutline",
    vendor: "Mdi",
    type: "",
    tags: ["projector","screen","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-projector-screen-variant-outline"},
      [ 
        h(
          "path",
          {"d":"M20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6M17 16H7V9H17V16Z"}
        ) 
      ]
    )
  }
}