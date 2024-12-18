import { h } from 'vue'
export default {
  $_icon: {
    name: "SizeS",
    vendor: "Mdi",
    type: [],
    tags: ["size","s"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-size-s"},
      [ 
        h(
          "path",
          {"d":"M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z"}
        ) 
      ]
    )
  }
}