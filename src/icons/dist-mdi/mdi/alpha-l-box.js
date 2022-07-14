import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaLBox",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","l","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-l-box"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H15V15H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}
        ) 
      ]
    )
  }
}