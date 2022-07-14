import { h } from 'vue'
export default {
  $_icon: {
    name: "NotEqual",
    vendor: "Mdi",
    type: "",
    tags: ["not","equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-not-equal"},
      [ 
        h(
          "path",
          {"d":"M21,10H9V8H21V10M21,16H9V14H21V16M4,5H6V16H4V5M6,18V20H4V18H6Z"}
        ) 
      ]
    )
  }
}