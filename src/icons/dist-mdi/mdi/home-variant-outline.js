import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeVariantOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-variant-outline","innerHTML":"<path d='M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z' />"},
    )
  }
}