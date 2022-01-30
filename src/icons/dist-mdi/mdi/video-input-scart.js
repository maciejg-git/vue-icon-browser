import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoInputScart",
    vendor: "Mdi",
    type: "",
    tags: ["video","input","scart"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-video-input-scart","innerHTML":"<path d='M20.6 2.2L17.3 2.4L13.8 4.4L13.3 3.5L2 10V17H3V19C3 20.1 3.9 21 5 21H15C16.1 21 17 20.1 17 19V17H18V10H17L16.8 9.6L20.3 7.6L22.1 4.8L20.6 2.2M15 17V19H5V17H15Z' />"},
    )
  }
}