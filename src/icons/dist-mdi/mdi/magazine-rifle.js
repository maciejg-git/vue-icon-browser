import { h } from 'vue'
export default {
  $_icon: {
    name: "MagazineRifle",
    vendor: "Mdi",
    type: "",
    tags: ["magazine","rifle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-magazine-rifle","innerHTML":"<path d='M7 1V3H8V13L5 19L14 23L18 13V3H19V1M10 3H16V5H11.88V13.45L9.6 18.14L8 17.5L10 13.5Z' />"},
    )
  }
}