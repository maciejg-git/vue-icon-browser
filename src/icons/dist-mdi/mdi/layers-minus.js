import { h } from 'vue'
export default {
  $_icon: {
    name: "LayersMinus",
    vendor: "Mdi",
    type: "",
    tags: ["layers","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-layers-minus"},
      [ 
        h(
          "path",
          {"d":"M22,17V19H14V17H22M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"}
        ) 
      ]
    )
  }
}