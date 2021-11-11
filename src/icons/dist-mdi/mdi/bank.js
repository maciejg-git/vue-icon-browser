import { h } from 'vue'
export default {
  name: "Bank",
  vendor: "Mdi",
  type: "",
  tags: ["bank"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bank","innerHTML":"<path d='M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z' />"},
    )
  }
}