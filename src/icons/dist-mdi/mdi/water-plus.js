import { h } from 'vue'
export default {
  $_icon: {
    name: "WaterPlus",
    vendor: "Mdi",
    type: "",
    tags: ["water","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-water-plus","innerHTML":"<path d='M12 18C12 18.7 12.12 19.36 12.34 20C12.23 20 12.12 20 12 20C8.69 20 6 17.31 6 14C6 10 12 3.25 12 3.25S16.31 8.1 17.62 12C14.5 12.22 12 14.82 12 18M19 17V14H17V17H14V19H17V22H19V19H22V17H19Z' />"},
    )
  }
}