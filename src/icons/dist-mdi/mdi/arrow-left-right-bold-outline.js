import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftRightBoldOutline",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","right","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-left-right-bold-outline","innerHTML":"<path d='M14,16V22L24,12L14,2V8H10V2L0,12L10,22V16H14M8,14V17L3,12L8,7V10H16V7L21,12L16,17V14H8Z' />"},
    )
  }
}