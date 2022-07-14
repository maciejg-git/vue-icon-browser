import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeMinusOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-minus-outline"},
      [ 
        h(
          "path",
          {"d":"M14 17H22V19H14V17M5 20V12H2L12 3L22 12H17V10.19L12 5.69L7 10.19V18H12C12 18.7 12.12 19.37 12.34 20H5Z"}
        ) 
      ]
    )
  }
}