import { h } from 'vue'
export default {
  $_icon: {
    name: "InboxArrowUp",
    vendor: "Mdi",
    type: "",
    tags: ["inbox","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-inbox-arrow-up"},
      [ 
        h(
          "path",
          {"d":"M14,14H10V11H8L12,7L16,11H14V14M16,11M5,15V5H19V15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3"}
        ) 
      ]
    )
  }
}