import { h } from 'vue'
export default {
  $_icon: {
    name: "AppleKeyboardShift",
    vendor: "Mdi",
    type: "",
    tags: ["apple","keyboard","shift"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-apple-keyboard-shift"},
      [ 
        h(
          "path",
          {"d":"M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z"}
        ) 
      ]
    )
  }
}