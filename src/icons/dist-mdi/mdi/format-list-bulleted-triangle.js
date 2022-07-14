import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatListBulletedTriangle",
    vendor: "Mdi",
    type: "",
    tags: ["format","list","bulleted","triangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-list-bulleted-triangle"},
      [ 
        h(
          "path",
          {"d":"M5,15.5L7.5,20H2.5L5,15.5M9,19H21V17H9V19M5,9.5L7.5,14H2.5L5,9.5M9,13H21V11H9V13M5,3.5L7.5,8H2.5L5,3.5M9,7H21V5H9V7Z"}
        ) 
      ]
    )
  }
}