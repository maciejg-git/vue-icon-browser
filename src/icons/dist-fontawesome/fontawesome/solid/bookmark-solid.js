import { h } from 'vue'
export default {
  $_icon: {
    name: "Bookmark",
    vendor: "Fa",
    type: "Solid",
    tags: ["bookmark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-bookmark","innerHTML":"<path d='M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z'/>"},
    )
  }
}