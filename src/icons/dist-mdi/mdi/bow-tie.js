import { h } from 'vue'
export default {
  $_icon: {
    name: "BowTie",
    vendor: "Mdi",
    type: "",
    tags: ["bow","tie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bow-tie"},
      [ 
        h(
          "path",
          {"d":"M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z"}
        ) 
      ]
    )
  }
}