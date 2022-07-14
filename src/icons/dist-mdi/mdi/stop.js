import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "Mdi",
    type: "",
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-stop"},
      [ 
        h(
          "path",
          {"d":"M18,18H6V6H18V18Z"}
        ) 
      ]
    )
  }
}