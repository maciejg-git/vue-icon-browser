import { h } from 'vue'
export default {
  $_icon: {
    name: "CeilingLightOutline",
    vendor: "Mdi",
    type: "",
    tags: ["ceiling","light","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-ceiling-light-outline"},
      [ 
        h(
          "path",
          {"d":"M14.76 11L16.76 15H7.24L9.24 11H14.76M13 4H11V9H8L4 17H20L16 9H13V4M14 18H10C10 19.11 10.9 20 12 20S14 19.11 14 18Z"}
        ) 
      ]
    )
  }
}