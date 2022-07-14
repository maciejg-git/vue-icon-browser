import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteSixteenthDotted",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","sixteenth","dotted"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-sixteenth-dotted"},
      [ 
        h(
          "path",
          {"d":"M18 18.5A1.5 1.5 0 1 1 16.5 17A1.5 1.5 0 0 1 18 18.5M18 7V3H12V13.55A4 4 0 1 0 14 17V11H18V8H14V7Z"}
        ) 
      ]
    )
  }
}