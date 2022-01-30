import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowClose",
    vendor: "Mdi",
    type: "",
    tags: ["window","close"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-window-close","innerHTML":"<path d='M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z' />"},
    )
  }
}