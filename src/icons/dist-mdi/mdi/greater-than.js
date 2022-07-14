import { h } from 'vue'
export default {
  $_icon: {
    name: "GreaterThan",
    vendor: "Mdi",
    type: "",
    tags: ["greater","than"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-greater-than"},
      [ 
        h(
          "path",
          {"d":"M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z"}
        ) 
      ]
    )
  }
}