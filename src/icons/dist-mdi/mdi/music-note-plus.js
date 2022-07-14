import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNotePlus",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-plus"},
      [ 
        h(
          "path",
          {"d":"M17 9V12H14V14H17V17H19V14H22V12H19V9H17M9 3V13.55C8.41 13.21 7.73 13 7 13C4.79 13 3 14.79 3 17S4.79 21 7 21 11 19.21 11 17V7H15V3H9Z"}
        ) 
      ]
    )
  }
}