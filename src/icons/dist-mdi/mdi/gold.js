import { h } from 'vue'
export default {
  $_icon: {
    name: "Gold",
    vendor: "Mdi",
    type: "",
    tags: ["gold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-gold"},
      [ 
        h(
          "path",
          {"d":"M1 22L2.5 17H9.5L11 22H1M13 22L14.5 17H21.5L23 22H13M6 15L7.5 10H14.5L16 15H6M23 6.05L19.14 7.14L18.05 11L16.96 7.14L13.1 6.05L16.96 4.96L18.05 1.1L19.14 4.96L23 6.05Z"}
        ) 
      ]
    )
  }
}