import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashAuto",
    vendor: "Mdi",
    type: "",
    tags: ["flash","auto"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash-auto"},
      [ 
        h(
          "path",
          {"d":"M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z"}
        ) 
      ]
    )
  }
}