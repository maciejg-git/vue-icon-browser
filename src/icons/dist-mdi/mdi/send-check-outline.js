import { h } from 'vue'
export default {
  $_icon: {
    name: "SendCheckOutline",
    vendor: "Mdi",
    type: "",
    tags: ["send","check","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-send-check-outline"},
      [ 
        h(
          "path",
          {"d":"M2 3V10L17 12L2 14V21L23 12M4 6.03L11.53 9.25L4 8.25M11.53 14.75L4 17.97V15.75M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z"}
        ) 
      ]
    )
  }
}