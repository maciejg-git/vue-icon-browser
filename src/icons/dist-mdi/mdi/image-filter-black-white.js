import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageFilterBlackWhite",
    vendor: "Mdi",
    type: "",
    tags: ["image","filter","black","white"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-image-filter-black-white","innerHTML":"<path d='M19,19L12,11V19H5L12,11V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' />"},
    )
  }
}