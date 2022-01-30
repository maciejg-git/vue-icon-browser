import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteQuarter",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","quarter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-music-note-quarter","innerHTML":"<path d='M14 3V13.56C13.41 13.21 12.73 13 12 13C9.79 13 8 14.79 8 17S9.79 21 12 21 16 19.21 16 17V3H14Z' />"},
    )
  }
}