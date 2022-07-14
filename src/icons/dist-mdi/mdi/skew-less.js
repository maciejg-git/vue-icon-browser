import { h } from 'vue'
export default {
  $_icon: {
    name: "SkewLess",
    vendor: "Mdi",
    type: "",
    tags: ["skew","less"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skew-less"},
      [ 
        h(
          "path",
          {"d":"M17.5,11L15.41,20H10.5L12.59,11H17.5M20,9H11L8,22H17L20,9M4,6L8,2V5H16V7H8V10L4,6Z"}
        ) 
      ]
    )
  }
}