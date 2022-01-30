import { h } from 'vue'
export default {
  $_icon: {
    name: "Octagon",
    vendor: "Mdi",
    type: "",
    tags: ["octagon"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-octagon","innerHTML":"<path d='M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27' />"},
    )
  }
}