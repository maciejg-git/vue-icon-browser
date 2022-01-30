import { h } from 'vue'
export default {
  $_icon: {
    name: "Bookmark",
    vendor: "Mdi",
    type: "",
    tags: ["bookmark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bookmark","innerHTML":"<path d='M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z' />"},
    )
  }
}