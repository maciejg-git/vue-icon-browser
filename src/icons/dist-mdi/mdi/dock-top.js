import { h } from 'vue'
export default {
  $_icon: {
    name: "DockTop",
    vendor: "Mdi",
    type: "",
    tags: ["dock","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-dock-top","innerHTML":"<path d='M4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20M4 11H20V18H4V11Z' />"},
    )
  }
}