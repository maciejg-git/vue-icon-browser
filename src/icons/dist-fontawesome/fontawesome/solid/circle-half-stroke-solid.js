import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalfStroke",
    vendor: "Fa",
    type: "Solid",
    tags: ["circle","half","stroke"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-circle-half-stroke","innerHTML":"<path d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z'/>"},
    )
  }
}