import { h } from 'vue'
export default {
  $_icon: {
    name: "ShapeCirclePlus",
    vendor: "Mdi",
    type: "",
    tags: ["shape","circle","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shape-circle-plus"},
      [ 
        h(
          "path",
          {"d":"M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"}
        ) 
      ]
    )
  }
}