import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric4BoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","4","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-4-box-outline"},
      [ 
        h(
          "path",
          {"d":"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13,17H15V7H13V11H11V7H9V13H13"}
        ) 
      ]
    )
  }
}