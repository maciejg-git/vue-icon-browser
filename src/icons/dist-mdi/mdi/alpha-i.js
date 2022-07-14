import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaI",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","i"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-i"},
      [ 
        h(
          "path",
          {"d":"M14,7V9H13V15H14V17H10V15H11V9H10V7H14Z"}
        ) 
      ]
    )
  }
}