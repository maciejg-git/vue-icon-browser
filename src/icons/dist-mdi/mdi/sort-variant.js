import { h } from 'vue'
export default {
  $_icon: {
    name: "SortVariant",
    vendor: "Mdi",
    type: "",
    tags: ["sort","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sort-variant"},
      [ 
        h(
          "path",
          {"d":"M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z"}
        ) 
      ]
    )
  }
}