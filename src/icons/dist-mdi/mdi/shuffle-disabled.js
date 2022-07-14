import { h } from 'vue'
export default {
  $_icon: {
    name: "ShuffleDisabled",
    vendor: "Mdi",
    type: "",
    tags: ["shuffle","disabled"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shuffle-disabled"},
      [ 
        h(
          "path",
          {"d":"M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16"}
        ) 
      ]
    )
  }
}