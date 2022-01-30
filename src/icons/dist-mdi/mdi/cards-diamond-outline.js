import { h } from 'vue'
export default {
  $_icon: {
    name: "CardsDiamondOutline",
    vendor: "Mdi",
    type: "",
    tags: ["cards","diamond","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-cards-diamond-outline","innerHTML":"<path d='M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5' />"},
    )
  }
}