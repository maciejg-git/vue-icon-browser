import { h } from 'vue'
export default {
  $_icon: {
    name: "SkewMore",
    vendor: "Mdi",
    type: "",
    tags: ["skew","more"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skew-more"},
      [ 
        h(
          "path",
          {"d":"M12.5,11L10.41,20H5.5L7.59,11H12.5M15,9H6L3,22H12L15,9M21,6L17,2V5H9V7H17V10L21,6Z"}
        ) 
      ]
    )
  }
}