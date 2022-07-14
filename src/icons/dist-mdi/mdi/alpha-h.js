import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaH",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","h"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-h"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z"}
        ) 
      ]
    )
  }
}