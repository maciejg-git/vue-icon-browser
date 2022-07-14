import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrangeBringForward",
    vendor: "Mdi",
    type: "",
    tags: ["arrange","bring","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrange-bring-forward"},
      [ 
        h(
          "path",
          {"d":"M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z"}
        ) 
      ]
    )
  }
}