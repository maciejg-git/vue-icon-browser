import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuOpen",
    vendor: "Mdi",
    type: "",
    tags: ["menu","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-menu-open"},
      [ 
        h(
          "path",
          {"d":"M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z"}
        ) 
      ]
    )
  }
}