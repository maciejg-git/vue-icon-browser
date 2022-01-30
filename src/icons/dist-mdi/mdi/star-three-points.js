import { h } from 'vue'
export default {
  $_icon: {
    name: "StarThreePoints",
    vendor: "Mdi",
    type: "",
    tags: ["star","three","points"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-star-three-points","innerHTML":"<path d='M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z' />"},
    )
  }
}