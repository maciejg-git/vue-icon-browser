import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatFontSizeDecrease",
    vendor: "Mdi",
    type: "",
    tags: ["format","font","size","decrease"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-font-size-decrease"},
      [ 
        h(
          "path",
          {"d":"M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z"}
        ) 
      ]
    )
  }
}