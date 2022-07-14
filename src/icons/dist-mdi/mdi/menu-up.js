import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuUp",
    vendor: "Mdi",
    type: "",
    tags: ["menu","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-menu-up"},
      [ 
        h(
          "path",
          {"d":"M7,15L12,10L17,15H7Z"}
        ) 
      ]
    )
  }
}