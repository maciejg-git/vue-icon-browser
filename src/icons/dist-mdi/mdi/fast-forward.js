import { h } from 'vue'
export default {
  $_icon: {
    name: "FastForward",
    vendor: "Mdi",
    type: "",
    tags: ["fast","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fast-forward"},
      [ 
        h(
          "path",
          {"d":"M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z"}
        ) 
      ]
    )
  }
}