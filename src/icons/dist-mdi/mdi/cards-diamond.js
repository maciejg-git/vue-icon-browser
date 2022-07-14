import { h } from 'vue'
export default {
  $_icon: {
    name: "CardsDiamond",
    vendor: "Mdi",
    type: "",
    tags: ["cards","diamond"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cards-diamond"},
      [ 
        h(
          "path",
          {"d":"M19,12L12,22L5,12L12,2"}
        ) 
      ]
    )
  }
}