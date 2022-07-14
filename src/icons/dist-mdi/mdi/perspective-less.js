import { h } from 'vue'
export default {
  $_icon: {
    name: "PerspectiveLess",
    vendor: "Mdi",
    type: "",
    tags: ["perspective","less"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-perspective-less"},
      [ 
        h(
          "path",
          {"d":"M16.56,12L19.23,20H4.78L7.44,12H16.56M7,1L3,5L7,9V6H11V4H7V1M17,1V4H13V6H17V9L21,5L17,1M18,10H6L2,22H22L18,10Z"}
        ) 
      ]
    )
  }
}