import { h } from 'vue'
export default {
  name: "HomeAlert",
  vendor: "Mdi",
  type: "",
  tags: ["home","alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-alert","innerHTML":"<path d='M12 3L2 12H5V20H19V12H22L12 3M13 18H11V16H13V18M13 14H11V8H13V14Z' />"},
    )
  }
}