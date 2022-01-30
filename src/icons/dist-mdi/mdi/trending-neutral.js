import { h } from 'vue'
export default {
  $_icon: {
    name: "TrendingNeutral",
    vendor: "Mdi",
    type: "",
    tags: ["trending","neutral"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-trending-neutral","innerHTML":"<path d='M22,12L18,8V11H3V13H18V16L22,12Z' />"},
    )
  }
}