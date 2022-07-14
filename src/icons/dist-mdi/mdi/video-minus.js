import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoMinus",
    vendor: "Mdi",
    type: "",
    tags: ["video","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-video-minus"},
      [ 
        h(
          "path",
          {"d":"M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H6V11H14V13Z"}
        ) 
      ]
    )
  }
}