import { h } from 'vue'
export default {
  $_icon: {
    name: "School",
    vendor: "Mdi",
    type: "",
    tags: ["school"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-school"},
      [ 
        h(
          "path",
          {"d":"M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"}
        ) 
      ]
    )
  }
}