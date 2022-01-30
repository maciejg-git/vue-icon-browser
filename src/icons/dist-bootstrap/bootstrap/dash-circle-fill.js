import { h } from 'vue'
export default {
  $_icon: {
    name: "DashCircleFill",
    vendor: "B",
    type: "",
    tags: ["dash","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-dash-circle-fill","innerHTML":"  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z'/>"},
    )
  }
}