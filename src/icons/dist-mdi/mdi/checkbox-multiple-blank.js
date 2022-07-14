import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckboxMultipleBlank",
    vendor: "Mdi",
    type: "",
    tags: ["checkbox","multiple","blank"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-checkbox-multiple-blank"},
      [ 
        h(
          "path",
          {"d":"M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z"}
        ) 
      ]
    )
  }
}