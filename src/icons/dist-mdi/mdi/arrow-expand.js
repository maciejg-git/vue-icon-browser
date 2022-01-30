import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpand",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","expand"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-expand","innerHTML":"<path d='M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z' />"},
    )
  }
}