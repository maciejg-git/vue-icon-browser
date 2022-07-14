import { h } from 'vue'
export default {
  $_icon: {
    name: "LanguageKotlin",
    vendor: "Mdi",
    type: "",
    tags: ["language","kotlin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-language-kotlin"},
      [ 
        h(
          "path",
          {"d":"M2 2H22L12 12L22 22H2Z"}
        ) 
      ]
    )
  }
}