import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleDown",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","double","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-double-down"},
      [ 
        h(
          "path",
          {"d":"M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"}
        ) 
      ]
    )
  }
}