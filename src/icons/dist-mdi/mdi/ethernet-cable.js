import { h } from 'vue'
export default {
  $_icon: {
    name: "EthernetCable",
    vendor: "Mdi",
    type: "",
    tags: ["ethernet","cable"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-ethernet-cable"},
      [ 
        h(
          "path",
          {"d":"M11,3V7H13V3H11M8,4V11H16V4H14V8H10V4H8M10,12V22H14V12H10Z"}
        ) 
      ]
    )
  }
}