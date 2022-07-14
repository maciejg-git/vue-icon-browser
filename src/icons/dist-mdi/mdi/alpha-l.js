import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaL",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-l"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H15V15H11V7H9Z"}
        ) 
      ]
    )
  }
}