import { h } from 'vue'
export default {
  $_icon: {
    name: "PentagonOutline",
    vendor: "Mdi",
    type: "",
    tags: ["pentagon","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pentagon-outline","innerHTML":"<path d='M12,5L19.6,10.5L16.7,19.4H7.3L4.4,10.5L12,5M12,2.5L2,9.8L5.8,21.5H18.1L22,9.8L12,2.5Z' />"},
    )
  }
}