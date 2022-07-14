import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareWave",
    vendor: "Mdi",
    type: "",
    tags: ["square","wave"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-square-wave"},
      [ 
        h(
          "path",
          {"d":"M2 2V12H4V4H11V22H22V12H20V20H13V2H2Z"}
        ) 
      ]
    )
  }
}