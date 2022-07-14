import { h } from 'vue'
export default {
  $_icon: {
    name: "Solid",
    vendor: "Mdi",
    type: "",
    tags: ["solid"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-solid"},
      [ 
        h(
          "path",
          {"d":"M0,0H24V24H0"}
        ) 
      ]
    )
  }
}