import { h } from 'vue'
export default {
  name: "ViewDashboard",
  vendor: "Mdi",
  type: "",
  tags: ["view","dashboard"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-view-dashboard","innerHTML":"<path d='M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z' />"},
    )
  }
}