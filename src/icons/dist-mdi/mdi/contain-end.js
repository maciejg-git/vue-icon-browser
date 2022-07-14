import { h } from 'vue'
export default {
  $_icon: {
    name: "ContainEnd",
    vendor: "Mdi",
    type: "",
    tags: ["contain","end"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-contain-end"},
      [ 
        h(
          "path",
          {"d":"M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15M22,3V21H16V19H20V5H16V3H22Z"}
        ) 
      ]
    )
  }
}