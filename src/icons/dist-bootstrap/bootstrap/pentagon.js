import { h } from 'vue'
export default {
  $_icon: {
    name: "Pentagon",
    vendor: "B",
    type: "",
    tags: ["pentagon"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-pentagon","innerHTML":"  <path d='m8 1.288 6.842 5.56L12.267 15H3.733L1.158 6.847 8 1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z'/>"},
    )
  }
}