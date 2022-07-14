import { h } from 'vue'
export default {
  $_icon: {
    name: "LabelVariant",
    vendor: "Mdi",
    type: "",
    tags: ["label","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-label-variant"},
      [ 
        h(
          "path",
          {"d":"M3.5,19L8.34,12L3.5,5H14.5C15.17,5 15.72,5.3 16.13,5.86L20.5,12L16.13,18.14C15.72,18.7 15.17,19 14.5,19H3.5Z"}
        ) 
      ]
    )
  }
}