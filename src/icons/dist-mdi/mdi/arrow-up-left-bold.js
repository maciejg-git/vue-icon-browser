import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpLeftBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","up","left","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-up-left-bold"},
      [ 
        h(
          "path",
          {"d":"M13.5 21C9.36 21 6 17.64 6 13.5V11H2L8 4L14 11H10V13.5C10 15.43 11.57 17 13.5 17H21V21H13.5Z"}
        ) 
      ]
    )
  }
}