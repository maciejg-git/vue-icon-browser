import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightTopBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","right","top","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-right-top-bold"},
      [ 
        h(
          "path",
          {"d":"M3 13.5C3 9.36 6.36 6 10.5 6H13V2L20 8L13 14V10H10.5C8.57 10 7 11.57 7 13.5V21H3V13.5Z"}
        ) 
      ]
    )
  }
}