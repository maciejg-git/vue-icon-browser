import { h } from 'vue'
export default {
  $_icon: {
    name: "PageLayoutHeaderFooter",
    vendor: "Mdi",
    type: "",
    tags: ["page","layout","header","footer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-page-layout-header-footer","innerHTML":"<path d='M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z' />"},
    )
  }
}