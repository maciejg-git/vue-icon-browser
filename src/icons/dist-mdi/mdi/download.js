import { h } from 'vue'
export default {
  $_icon: {
    name: "Download",
    vendor: "Mdi",
    type: "",
    tags: ["download"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-download"},
      [ 
        h(
          "path",
          {"d":"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}
        ) 
      ]
    )
  }
}