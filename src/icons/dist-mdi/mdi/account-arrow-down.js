import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountArrowDown",
    vendor: "Mdi",
    type: "",
    tags: ["account","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-account-arrow-down","innerHTML":"<path d='M6 8C6 5.79 7.79 4 10 4S14 5.79 14 8 12.21 12 10 12 6 10.21 6 8M10 14C5.58 14 2 15.79 2 18V20H13.09C13.04 19.67 13 19.34 13 19C13 17.36 13.66 15.87 14.74 14.78C13.41 14.29 11.78 14 10 14M20 20V16H18V20H16L19 23L22 20H20Z' />"},
    )
  }
}