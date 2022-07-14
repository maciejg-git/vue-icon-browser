import { h } from 'vue'
export default {
  $_icon: {
    name: "Houzz",
    vendor: "Fa",
    type: "Brand",
    tags: ["houzz"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-houzz"},
      [ 
        h(
          "path",
          {"d":"M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"}
        ) 
      ]
    )
  }
}