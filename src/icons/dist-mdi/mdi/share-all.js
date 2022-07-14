import { h } from 'vue'
export default {
  $_icon: {
    name: "ShareAll",
    vendor: "Mdi",
    type: "",
    tags: ["share","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-share-all"},
      [ 
        h(
          "path",
          {"d":"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"}
        ) 
      ]
    )
  }
}