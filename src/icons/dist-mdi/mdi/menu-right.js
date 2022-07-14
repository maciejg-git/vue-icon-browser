import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuRight",
    vendor: "Mdi",
    type: "",
    tags: ["menu","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-menu-right"},
      [ 
        h(
          "path",
          {"d":"M10,17L15,12L10,7V17Z"}
        ) 
      ]
    )
  }
}