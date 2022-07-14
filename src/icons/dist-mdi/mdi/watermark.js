import { h } from 'vue'
export default {
  $_icon: {
    name: "Watermark",
    vendor: "Mdi",
    type: "",
    tags: ["watermark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-watermark"},
      [ 
        h(
          "path",
          {"d":"M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H12V13H21V19Z"}
        ) 
      ]
    )
  }
}