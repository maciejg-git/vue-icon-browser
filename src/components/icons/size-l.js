import { h } from 'vue'
export default {
  $_icon: {
    name: "SizeL",
    vendor: "Mdi",
    type: [],
    tags: ["size","l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-size-l"},
      [ 
        h(
          "path",
          {"d":"M9 7V17H15V15H11V7H9Z"}
        ) 
      ]
    )
  }
}