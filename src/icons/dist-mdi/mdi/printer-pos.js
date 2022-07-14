import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPos",
    vendor: "Mdi",
    type: "",
    tags: ["printer","pos"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-printer-pos"},
      [ 
        h(
          "path",
          {"d":"M18 10H6A2 2 0 0 0 4 12V19H20V12A2 2 0 0 0 18 10M18 14H14V12H18M17 9H7V4H17Z"}
        ) 
      ]
    )
  }
}