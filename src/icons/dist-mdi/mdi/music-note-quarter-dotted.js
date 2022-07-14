import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteQuarterDotted",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","quarter","dotted"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-quarter-dotted"},
      [ 
        h(
          "path",
          {"d":"M12 13V13.56A3.96 3.96 0 0 0 10 13A4 4 0 1 0 14 17V3H12M16.5 17A1.5 1.5 0 1 1 15 18.5A1.5 1.5 0 0 1 16.5 17Z"}
        ) 
      ]
    )
  }
}