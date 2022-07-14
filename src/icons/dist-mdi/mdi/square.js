import { h } from 'vue'
export default {
  $_icon: {
    name: "Square",
    vendor: "Mdi",
    type: "",
    tags: ["square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-square"},
      [ 
        h(
          "path",
          {"d":"M3,3V21H21V3"}
        ) 
      ]
    )
  }
}