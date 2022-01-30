import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandLeft",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","expand","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-expand-left","innerHTML":"<path d='M20,22H22V2H20V11H5.83L11.33,5.5L9.92,4.08L2,12L9.92,19.92L11.33,18.5L5.83,13H20V22Z' />"},
    )
  }
}