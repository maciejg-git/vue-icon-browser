import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkMinus",
    vendor: "Mdi",
    type: "",
    tags: ["bookmark","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bookmark-minus"},
      [ 
        h(
          "path",
          {"d":"M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3M15,11H9V9H15V11Z"}
        ) 
      ]
    )
  }
}