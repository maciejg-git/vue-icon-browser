import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandRight",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","expand","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-expand-right"},
      [ 
        h(
          "path",
          {"d":"M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z"}
        ) 
      ]
    )
  }
}