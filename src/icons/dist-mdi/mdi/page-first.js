import { h } from 'vue'
export default {
  $_icon: {
    name: "PageFirst",
    vendor: "Mdi",
    type: "",
    tags: ["page","first"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-page-first"},
      [ 
        h(
          "path",
          {"d":"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"}
        ) 
      ]
    )
  }
}