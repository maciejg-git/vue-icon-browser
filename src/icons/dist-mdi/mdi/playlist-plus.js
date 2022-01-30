import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistPlus",
    vendor: "Mdi",
    type: "",
    tags: ["playlist","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-playlist-plus","innerHTML":"<path d='M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z' />"},
    )
  }
}