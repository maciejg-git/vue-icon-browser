import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistPlay",
    vendor: "Mdi",
    type: "",
    tags: ["playlist","play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-playlist-play","innerHTML":"<path d='M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z' />"},
    )
  }
}