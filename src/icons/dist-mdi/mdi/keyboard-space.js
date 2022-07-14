import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardSpace",
    vendor: "Mdi",
    type: "",
    tags: ["keyboard","space"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-keyboard-space"},
      [ 
        h(
          "path",
          {"d":"M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z"}
        ) 
      ]
    )
  }
}