import { h } from 'vue'
export default {
  $_icon: {
    name: "BlindsVerticalClosed",
    vendor: "Mdi",
    type: "",
    tags: ["blinds","vertical","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-blinds-vertical-closed"},
      [ 
        h(
          "path",
          {"d":"M20 19V3H4V19H2V21H22V19H20M13 5H14.5V19H13V5M11 19H9.5V5H11V19M6 5H7.5V19H6V5M16.5 19V5H18V19H16.5Z"}
        ) 
      ]
    )
  }
}