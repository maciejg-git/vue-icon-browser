import { h } from 'vue'
export default {
  $_icon: {
    name: "RollerShadeClosed",
    vendor: "Mdi",
    type: "",
    tags: ["roller","shade","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-roller-shade-closed"},
      [ 
        h(
          "path",
          {"d":"M20 19V3H4V19H2V21H10.25C10.25 21.97 11.03 22.75 12 22.75S13.75 21.97 13.75 21H22V19H20M6 19V17H11V19H6M13 19V17H18V19H13Z"}
        ) 
      ]
    )
  }
}