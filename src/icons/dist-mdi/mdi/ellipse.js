import { h } from 'vue'
export default {
  $_icon: {
    name: "Ellipse",
    vendor: "Mdi",
    type: "",
    tags: ["ellipse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-ellipse","innerHTML":"<path d='M12,4C6.5,4 2,7.58 2,12C2,16.42 6.5,20 12,20C17.5,20 22,16.42 22,12C22,7.58 17.5,4 12,4Z' />"},
    )
  }
}