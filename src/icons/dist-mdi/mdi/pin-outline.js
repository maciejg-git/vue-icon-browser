import { h } from 'vue'
export default {
  $_icon: {
    name: "PinOutline",
    vendor: "Mdi",
    type: "",
    tags: ["pin","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pin-outline","innerHTML":"<path d='M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z' />"},
    )
  }
}