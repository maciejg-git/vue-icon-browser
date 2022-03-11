import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "Fa",
    type: "Solid",
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-stop","innerHTML":"<path d='M384 128v255.1c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64H320C355.3 64 384 92.65 384 128z'/>"},
    )
  }
}