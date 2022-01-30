import { h } from 'vue'
export default {
  $_icon: {
    name: "PanDown",
    vendor: "Mdi",
    type: "",
    tags: ["pan","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pan-down","innerHTML":"<path d='M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z' />"},
    )
  }
}