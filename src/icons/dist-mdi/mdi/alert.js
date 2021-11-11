import { h } from 'vue'
export default {
  name: "Alert",
  vendor: "Mdi",
  type: "",
  tags: ["alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-alert","innerHTML":"<path d='M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z' />"},
    )
  }
}