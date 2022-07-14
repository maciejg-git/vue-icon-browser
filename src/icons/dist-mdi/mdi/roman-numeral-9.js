import { h } from 'vue'
export default {
  $_icon: {
    name: "RomanNumeral9",
    vendor: "Mdi",
    type: "",
    tags: ["roman","numeral","9"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-roman-numeral-9"},
      [ 
        h(
          "path",
          {"d":"M11 7V9H10V15H11V17H7V15H8V9H7V7H11M12 7L14 12L12 17H14L15 14.5L16 17H18L16 12L18 7H16L15 9.5L14 7H12Z"}
        ) 
      ]
    )
  }
}