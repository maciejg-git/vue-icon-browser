import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronLeft",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-left"},
      [ 
        h(
          "path",
          {"d":"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}
        ) 
      ]
    )
  }
}