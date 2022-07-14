import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleUp",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","double","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-double-up"},
      [ 
        h(
          "path",
          {"d":"M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z"}
        ) 
      ]
    )
  }
}