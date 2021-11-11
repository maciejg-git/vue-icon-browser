import { h } from 'vue'
export default {
  name: "ChartTree",
  vendor: "Mdi",
  type: "",
  tags: ["chart","tree"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-chart-tree","innerHTML":"<path d='M14,6H22V22H14V6M2,4H22V2H2V4M2,8H12V6H2V8M9,22H12V10H9V22M2,22H7V10H2V22Z' />"},
    )
  }
}