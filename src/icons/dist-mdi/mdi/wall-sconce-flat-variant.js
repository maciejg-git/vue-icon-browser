import { h } from 'vue'
export default {
  $_icon: {
    name: "WallSconceFlatVariant",
    vendor: "Mdi",
    type: "",
    tags: ["wall","sconce","flat","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-wall-sconce-flat-variant"},
      [ 
        h(
          "path",
          {"d":"M19 19V13H5V19H19M18.73 10.68L20.5 8.91L19.09 7.5L17.32 9.27L18.73 10.68M5.27 10.68L6.68 9.27L4.91 7.5L3.5 8.91L5.27 10.68M13 8V5H11V8H13Z"}
        ) 
      ]
    )
  }
}