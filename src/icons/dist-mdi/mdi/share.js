import { h } from 'vue'
export default {
  $_icon: {
    name: "Share",
    vendor: "Mdi",
    type: "",
    tags: ["share"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-share"},
      [ 
        h(
          "path",
          {"d":"M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"}
        ) 
      ]
    )
  }
}