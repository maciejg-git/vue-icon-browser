import { h } from 'vue'
export default {
  $_icon: {
    name: "Pandora",
    vendor: "Mdi",
    type: "",
    tags: ["pandora"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pandora"},
      [ 
        h(
          "path",
          {"d":"M10,20A1,1 0 0,1 9,21H4V3H13.71A6.75,6.75 0 0,1 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z"}
        ) 
      ]
    )
  }
}