import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaE",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","e"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-e"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z"}
        ) 
      ]
    )
  }
}