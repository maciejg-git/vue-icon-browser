import { h } from 'vue'
export default {
  $_icon: {
    name: "Tablet",
    vendor: "Mdi",
    type: "",
    tags: ["tablet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tablet"},
      [ 
        h(
          "path",
          {"d":"M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z"}
        ) 
      ]
    )
  }
}