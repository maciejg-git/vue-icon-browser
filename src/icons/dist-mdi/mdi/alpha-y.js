import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaY",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","y"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-y"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9Z"}
        ) 
      ]
    )
  }
}