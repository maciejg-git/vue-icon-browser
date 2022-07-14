import { h } from 'vue'
export default {
  $_icon: {
    name: "LessThan",
    vendor: "Mdi",
    type: "",
    tags: ["less","than"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-less-than"},
      [ 
        h(
          "path",
          {"d":"M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z"}
        ) 
      ]
    )
  }
}