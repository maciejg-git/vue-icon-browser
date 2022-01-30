import { h } from 'vue'
export default {
  $_icon: {
    name: "CurtainsClosed",
    vendor: "Mdi",
    type: "",
    tags: ["curtains","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-curtains-closed","innerHTML":"<path d='M23 3H1V1H23V3M2 22H11V4H2V22M22 4H13V22H22V4Z' />"},
    )
  }
}