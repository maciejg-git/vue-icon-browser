import { h } from 'vue'
export default {
  $_icon: {
    name: "Bullet",
    vendor: "Mdi",
    type: "",
    tags: ["bullet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bullet","innerHTML":"<path d='M14,22H10V21H14V22M13,10V7H11V10L10,11.5V20H14V11.5L13,10M12,2C12,2 11,3 11,5V6H13V5C13,5 13,3 12,2Z' />"},
    )
  }
}