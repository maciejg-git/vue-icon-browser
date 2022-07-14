import { h } from 'vue'
export default {
  $_icon: {
    name: "Forwardburger",
    vendor: "Mdi",
    type: "",
    tags: ["forwardburger"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-forwardburger"},
      [ 
        h(
          "path",
          {"d":"M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"}
        ) 
      ]
    )
  }
}