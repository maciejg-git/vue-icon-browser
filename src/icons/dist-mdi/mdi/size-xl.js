import { h } from 'vue'
export default {
  $_icon: {
    name: "SizeXl",
    vendor: "Mdi",
    type: "",
    tags: ["size","xl"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-size-xl"},
      [ 
        h(
          "path",
          {"d":"M6 7H8L9 9.5L10 7H12L10 12L12 17H10L9 14.5L8 17H6L8 12L6 7M13 7H15V15H19V17H13V7Z"}
        ) 
      ]
    )
  }
}