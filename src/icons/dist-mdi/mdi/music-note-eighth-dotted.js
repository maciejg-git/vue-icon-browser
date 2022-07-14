import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteEighthDotted",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","eighth","dotted"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-eighth-dotted"},
      [ 
        h(
          "path",
          {"d":"M12 3V13.55A4 4 0 1 0 14 17V7H18V3M16.5 20A1.5 1.5 0 1 1 18 18.5A1.5 1.5 0 0 1 16.5 20Z"}
        ) 
      ]
    )
  }
}