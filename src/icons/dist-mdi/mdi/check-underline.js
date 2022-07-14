import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckUnderline",
    vendor: "Mdi",
    type: "",
    tags: ["check","underline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-check-underline"},
      [ 
        h(
          "path",
          {"d":"M21,5L9,17L3.5,11.5L4.91,10.09L9,14.17L19.59,3.59L21,5M3,21V19H21V21H3Z"}
        ) 
      ]
    )
  }
}