import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaU",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","u"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-u"},
      [ 
        h(
          "path",
          {"d":"M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9Z"}
        ) 
      ]
    )
  }
}