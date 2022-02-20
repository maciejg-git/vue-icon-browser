import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnetFill",
    vendor: "B",
    type: "",
    tags: ["magnet","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-magnet-fill","innerHTML":"  <path fill-rule='evenodd' d='M15 12h-4v3h4v-3ZM5 12H1v3h4v-3ZM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0V8Z'/>"},
    )
  }
}