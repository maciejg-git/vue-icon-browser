import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronLeftCircle",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","left","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-left-circle"},
      [ 
        h(
          "path",
          {"d":"M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"}
        ) 
      ]
    )
  }
}