import { h } from 'vue'
export default {
  name: "GarageAlert",
  vendor: "Mdi",
  type: "",
  tags: ["garage","alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-garage-alert","innerHTML":"<path d='M17,20H15V11H5V20H3V9L10,5L17,9V20M6,12H14V14H6V12M6,15H14V17H6V15M19,15V10H21V15H19M19,19V17H21V19H19Z' />"},
    )
  }
}