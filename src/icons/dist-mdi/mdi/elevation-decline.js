import { h } from 'vue'
export default {
  $_icon: {
    name: "ElevationDecline",
    vendor: "Mdi",
    type: "",
    tags: ["elevation","decline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-elevation-decline"},
      [ 
        h(
          "path",
          {"d":"M21,21H3V11.25L9.45,15L13.22,12.8L21,17.29V21M3,8.94V6.75L9.45,10.5L13.22,8.3L21,12.79V15L13.22,10.5L9.45,12.67L3,8.94Z"}
        ) 
      ]
    )
  }
}