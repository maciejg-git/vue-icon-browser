import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowShutterOpen",
    vendor: "Mdi",
    type: "",
    tags: ["window","shutter","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-window-shutter-open"},
      [ 
        h(
          "path",
          {"d":"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z"}
        ) 
      ]
    )
  }
}