import { h } from 'vue'
export default {
  $_icon: {
    name: "Cross",
    vendor: "Mdi",
    type: "",
    tags: ["cross"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cross"},
      [ 
        h(
          "path",
          {"d":"M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z"}
        ) 
      ]
    )
  }
}