import { h } from 'vue'
export default {
  $_icon: {
    name: "Deviantart",
    vendor: "Mdi",
    type: "",
    tags: ["deviantart"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-deviantart","innerHTML":"<path d='M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z' />"},
    )
  }
}