import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatPaint",
    vendor: "Mdi",
    type: "",
    tags: ["format","paint"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-paint"},
      [ 
        h(
          "path",
          {"d":"M18,4V3A1,1 0 0,0 17,2H5A1,1 0 0,0 4,3V7A1,1 0 0,0 5,8H17A1,1 0 0,0 18,7V6H19V10H9V21A1,1 0 0,0 10,22H12A1,1 0 0,0 13,21V12H21V4H18Z"}
        ) 
      ]
    )
  }
}