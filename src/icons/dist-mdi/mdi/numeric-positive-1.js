import { h } from 'vue'
export default {
  $_icon: {
    name: "NumericPositive1",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","positive","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-positive-1"},
      [ 
        h(
          "path",
          {"d":"M13 7V9H15V17H17V7H13M11 13H9V15H7V13H5V11H7V9H9V11H11V13Z"}
        ) 
      ]
    )
  }
}