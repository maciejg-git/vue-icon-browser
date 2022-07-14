import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomRightThick",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","bottom","right","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-bottom-right-thick"},
      [ 
        h(
          "path",
          {"d":"M14.89,12.06V7.11H18.31V18.31H7.11V14.89H12.06L5.69,8.5L8.5,5.69L14.89,12.06Z"}
        ) 
      ]
    )
  }
}