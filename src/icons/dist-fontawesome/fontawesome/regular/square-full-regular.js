import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareFull",
    vendor: "Fa",
    type: "Regular",
    tags: ["square","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-square-full","innerHTML":"<path d='M512 0V512H0V0H512zM464 48H48V464H464V48z'/>"},
    )
  }
}