import { h } from 'vue'
export default {
  $_icon: {
    name: "SettingsHelper",
    vendor: "Mdi",
    type: "",
    tags: ["settings","helper"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-settings-helper","innerHTML":"<path d='M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z' />"},
    )
  }
}