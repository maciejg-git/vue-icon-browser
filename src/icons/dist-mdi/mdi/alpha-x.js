import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaX",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","x"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-x"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z"}
        ) 
      ]
    )
  }
}