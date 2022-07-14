import { h } from 'vue'
export default {
  $_icon: {
    name: "StarCheck",
    vendor: "Mdi",
    type: "",
    tags: ["star","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-star-check"},
      [ 
        h(
          "path",
          {"d":"M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M17.8 21.2L22.6 16.4L21.3 15L17.7 18.6L16.2 17L15 18.2L17.8 21.2"}
        ) 
      ]
    )
  }
}