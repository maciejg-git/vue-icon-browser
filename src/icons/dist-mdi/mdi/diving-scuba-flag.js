import { h } from 'vue'
export default {
  $_icon: {
    name: "DivingScubaFlag",
    vendor: "Mdi",
    type: "",
    tags: ["diving","scuba","flag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-diving-scuba-flag"},
      [ 
        h(
          "path",
          {"d":"M2,6L19,20H2V6M5,4L22,18V4H5Z"}
        ) 
      ]
    )
  }
}