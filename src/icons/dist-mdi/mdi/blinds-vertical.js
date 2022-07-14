import { h } from 'vue'
export default {
  $_icon: {
    name: "BlindsVertical",
    vendor: "Mdi",
    type: "",
    tags: ["blinds","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-blinds-vertical"},
      [ 
        h(
          "path",
          {"d":"M20 19V3H4V19H2V21H22V19H20M10 19V5H14V19H10Z"}
        ) 
      ]
    )
  }
}