import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaN",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","n"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-n"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V12L13,17H15V7H13V12L11,7H9Z"}
        ) 
      ]
    )
  }
}