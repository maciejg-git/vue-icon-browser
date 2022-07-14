import { h } from 'vue'
export default {
  $_icon: {
    name: "Poll",
    vendor: "Mdi",
    type: "",
    tags: ["poll"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-poll"},
      [ 
        h(
          "path",
          {"d":"M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"}
        ) 
      ]
    )
  }
}