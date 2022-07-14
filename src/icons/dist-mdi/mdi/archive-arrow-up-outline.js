import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveArrowUpOutline",
    vendor: "Mdi",
    type: "",
    tags: ["archive","arrow","up","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-archive-arrow-up-outline"},
      [ 
        h(
          "path",
          {"d":"M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M5 5V7H19V5M10.5 17V14H8L12 10L16 14H13.5V17"}
        ) 
      ]
    )
  }
}