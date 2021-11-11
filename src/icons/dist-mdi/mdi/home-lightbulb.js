import { h } from 'vue'
export default {
  name: "HomeLightbulb",
  vendor: "Mdi",
  type: "",
  tags: ["home","lightbulb"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-lightbulb","innerHTML":"<path d='M12 3L2 12H5V20H19V12H22M13 18H11V17H13M13.5 14.58V16H10.5V14.58A3 3 0 1 1 13.5 14.58Z' />"},
    )
  }
}