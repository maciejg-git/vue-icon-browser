import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagMinus",
    vendor: "Mdi",
    type: "",
    tags: ["flag","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag-minus"},
      [ 
        h(
          "path",
          {"d":"M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z"}
        ) 
      ]
    )
  }
}