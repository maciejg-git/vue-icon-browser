import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeMinus",
    vendor: "Mdi",
    type: "",
    tags: ["home","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-minus"},
      [ 
        h(
          "path",
          {"d":"M22 17V19H14V17H22M12 3L22 12H18C14.69 12 12 14.69 12 18C12 18.7 12.12 19.37 12.34 20H5V12H2L12 3Z"}
        ) 
      ]
    )
  }
}