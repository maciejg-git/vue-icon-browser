import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayPause",
    vendor: "Mdi",
    type: "",
    tags: ["play","pause"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-play-pause","innerHTML":"<path d='M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5' />"},
    )
  }
}