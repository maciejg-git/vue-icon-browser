import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewSequentialOutline",
    vendor: "Mdi",
    type: "",
    tags: ["view","sequential","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-sequential-outline"},
      [ 
        h(
          "path",
          {"d":"M3 5V19H21V5H3M19 7V9H5V7H19M19 11V13H5V11H19M5 17V15H19V17H5Z"}
        ) 
      ]
    )
  }
}