import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonWaxingCrescent",
    vendor: "Mdi",
    type: "",
    tags: ["moon","waxing","crescent"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-moon-waxing-crescent"},
      [ 
        h(
          "path",
          {"d":"M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z"}
        ) 
      ]
    )
  }
}