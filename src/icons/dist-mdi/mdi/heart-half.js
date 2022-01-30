import { h } from 'vue'
export default {
  $_icon: {
    name: "HeartHalf",
    vendor: "Mdi",
    type: "",
    tags: ["heart","half"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-heart-half","innerHTML":"<path d='M13,7.2V17.74L13,20.44L12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C10,3 13,5 13,7.2Z' />"},
    )
  }
}