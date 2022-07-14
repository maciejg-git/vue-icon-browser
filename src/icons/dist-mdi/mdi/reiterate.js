import { h } from 'vue'
export default {
  $_icon: {
    name: "Reiterate",
    vendor: "Mdi",
    type: "",
    tags: ["reiterate"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-reiterate"},
      [ 
        h(
          "path",
          {"d":"M10.5 4A6.5 6.5 0 0 0 4 10H1L5 14L9 10H6.03A4.5 4.5 0 0 1 10.5 6A4.5 4.5 0 0 1 15 10.5A4.5 4.5 0 0 1 10.5 15H2V17H10.5A6.5 6.5 0 0 0 17 10.5A6.5 6.5 0 0 0 10.5 4M19 12V15H16.5A7.5 7.5 0 0 1 14.24 17H19V20L23 16Z"}
        ) 
      ]
    )
  }
}