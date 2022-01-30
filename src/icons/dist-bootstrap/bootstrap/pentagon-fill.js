import { h } from 'vue'
export default {
  $_icon: {
    name: "PentagonFill",
    vendor: "B",
    type: "",
    tags: ["pentagon","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-pentagon-fill","innerHTML":"  <path d='m8 0 8 6.5-3 9.5H3L0 6.5 8 0z'/>"},
    )
  }
}