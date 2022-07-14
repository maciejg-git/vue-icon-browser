import { h } from 'vue'
export default {
  $_icon: {
    name: "PowerOn",
    vendor: "Mdi",
    type: "",
    tags: ["power","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-power-on"},
      [ 
        h(
          "path",
          {"d":"M11,3H13V21H11V3Z"}
        ) 
      ]
    )
  }
}