import { h } from 'vue'
export default {
  $_icon: {
    name: "Cup",
    vendor: "Mdi",
    type: "",
    tags: ["cup"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-cup","innerHTML":"<path d='M18.32,8H5.67L5.23,4H18.77M3,2L5,20.23C5.13,21.23 5.97,22 7,22H17C18,22 18.87,21.23 19,20.23L21,2H3Z' />"},
    )
  }
}