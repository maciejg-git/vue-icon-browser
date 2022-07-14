import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength1",
    vendor: "Mdi",
    type: "",
    tags: ["network","strength","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-network-strength-1"},
      [ 
        h(
          "path",
          {"d":"M1,21H21V1M19,5.83V19H11V13.83"}
        ) 
      ]
    )
  }
}