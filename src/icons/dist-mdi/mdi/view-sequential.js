import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewSequential",
    vendor: "Mdi",
    type: "",
    tags: ["view","sequential"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-sequential"},
      [ 
        h(
          "path",
          {"d":"M3 5H21V9H3V5M3 10H21V14H3V10M3 15H21V19H3V15Z"}
        ) 
      ]
    )
  }
}