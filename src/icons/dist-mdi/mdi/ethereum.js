import { h } from 'vue'
export default {
  $_icon: {
    name: "Ethereum",
    vendor: "Mdi",
    type: "",
    tags: ["ethereum"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-ethereum","innerHTML":"<path d='M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z' />"},
    )
  }
}