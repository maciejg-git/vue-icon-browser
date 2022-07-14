import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaG",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","g"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-g"},
      [ 
        h(
          "path",
          {"d":"M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V11H13V15H11V9H15V7H11Z"}
        ) 
      ]
    )
  }
}