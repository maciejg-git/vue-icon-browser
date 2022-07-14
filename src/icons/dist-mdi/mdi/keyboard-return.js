import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardReturn",
    vendor: "Mdi",
    type: "",
    tags: ["keyboard","return"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-keyboard-return"},
      [ 
        h(
          "path",
          {"d":"M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z"}
        ) 
      ]
    )
  }
}