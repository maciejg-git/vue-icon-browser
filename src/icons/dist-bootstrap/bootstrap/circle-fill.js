import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleFill",
    vendor: "B",
    type: "",
    tags: ["circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-circle-fill","innerHTML":"  <circle cx='8' cy='8' r='8'/>"},
    )
  }
}