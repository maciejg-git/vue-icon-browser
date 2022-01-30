import { h } from 'vue'
export default {
  $_icon: {
    name: "StarFourPoints",
    vendor: "Mdi",
    type: "",
    tags: ["star","four","points"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-star-four-points","innerHTML":"<path d='M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z' />"},
    )
  }
}