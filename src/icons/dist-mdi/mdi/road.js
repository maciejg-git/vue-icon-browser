import { h } from 'vue'
export default {
  $_icon: {
    name: "Road",
    vendor: "Mdi",
    type: "",
    tags: ["road"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-road"},
      [ 
        h(
          "path",
          {"d":"M11,16H13V20H11M11,10H13V14H11M11,4H13V8H11M4,22H20V2H4V22Z"}
        ) 
      ]
    )
  }
}