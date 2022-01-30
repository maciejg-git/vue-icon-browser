import { h } from 'vue'
export default {
  $_icon: {
    name: "Eject",
    vendor: "Mdi",
    type: "",
    tags: ["eject"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-eject","innerHTML":"<path d='M12,5L5.33,15H18.67M5,17H19V19H5V17Z' />"},
    )
  }
}