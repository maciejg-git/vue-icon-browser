import { h } from 'vue'
export default {
  $_icon: {
    name: "Curtains",
    vendor: "Mdi",
    type: "",
    tags: ["curtains"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-curtains","innerHTML":"<path d='M23 3H1V1H23V3M2 22H6C6 19 4 17 4 17C10 13 11 4 11 4H2V22M22 4H13C13 4 14 13 20 17C20 17 18 19 18 22H22V4Z' />"},
    )
  }
}