import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonFirstQuarter",
    vendor: "Mdi",
    type: "",
    tags: ["moon","first","quarter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-moon-first-quarter"},
      [ 
        h(
          "path",
          {"d":"M12 2V22A10 10 0 0 0 12 2Z"}
        ) 
      ]
    )
  }
}