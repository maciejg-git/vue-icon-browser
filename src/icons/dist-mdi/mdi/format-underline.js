import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatUnderline",
    vendor: "Mdi",
    type: "",
    tags: ["format","underline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-underline"},
      [ 
        h(
          "path",
          {"d":"M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z"}
        ) 
      ]
    )
  }
}