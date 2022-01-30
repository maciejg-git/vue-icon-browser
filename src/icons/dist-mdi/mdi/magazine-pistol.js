import { h } from 'vue'
export default {
  $_icon: {
    name: "MagazinePistol",
    vendor: "Mdi",
    type: "",
    tags: ["magazine","pistol"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-magazine-pistol","innerHTML":"<path d='M14 1L12 3H7L9 21H8V23H18V21L16 1M9 5H12L12.24 7H9.24M9.47 9H12.47L12.71 11H9.71M9.94 13H12.94L13.18 15H10.18M10.41 17H13.41L13.65 19H10.65Z' />"},
    )
  }
}