import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaP",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","p"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-p"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9Z"}
        ) 
      ]
    )
  }
}