import { h } from 'vue'
export default {
  $_icon: {
    name: "SortReverseVariant",
    vendor: "Mdi",
    type: "",
    tags: ["sort","reverse","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sort-reverse-variant"},
      [ 
        h(
          "path",
          {"d":"M3 11H15V13H3M3 18V16H21V18M3 6H9V8H3Z"}
        ) 
      ]
    )
  }
}