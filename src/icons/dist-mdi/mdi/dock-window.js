import { h } from 'vue'
export default {
  $_icon: {
    name: "DockWindow",
    vendor: "Mdi",
    type: "",
    tags: ["dock","window"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-dock-window"},
      [ 
        h(
          "path",
          {"d":"M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z"}
        ) 
      ]
    )
  }
}