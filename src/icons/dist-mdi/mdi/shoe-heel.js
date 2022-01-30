import { h } from 'vue'
export default {
  $_icon: {
    name: "ShoeHeel",
    vendor: "Mdi",
    type: "",
    tags: ["shoe","heel"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-shoe-heel","innerHTML":"<path d='M3,18H11.7L17,14H18V18H20V14C20,14 21,12 21,10C21,8 20.5,6 20.5,6H18.5L18,7L10,14H8L3,16V18Z' />"},
    )
  }
}