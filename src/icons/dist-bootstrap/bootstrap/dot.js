import { h } from 'vue'
export default {
  name: "Dot",
  vendor: "B",
  type: "",
  tags: ["dot"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-dot","innerHTML":"  <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/>"},
    )
  }
}