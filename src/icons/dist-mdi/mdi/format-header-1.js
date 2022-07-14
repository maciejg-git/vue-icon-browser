import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHeader1",
    vendor: "Mdi",
    type: "",
    tags: ["format","header","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-header-1"},
      [ 
        h(
          "path",
          {"d":"M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z"}
        ) 
      ]
    )
  }
}