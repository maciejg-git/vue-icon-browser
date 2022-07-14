import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric4Box",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","4","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-4-box"},
      [ 
        h(
          "path",
          {"d":"M15,17H13V13H9V7H11V11H13V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"}
        ) 
      ]
    )
  }
}