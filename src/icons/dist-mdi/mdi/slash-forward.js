import { h } from 'vue'
export default {
  $_icon: {
    name: "SlashForward",
    vendor: "Mdi",
    type: "",
    tags: ["slash","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-slash-forward"},
      [ 
        h(
          "path",
          {"d":"M7 21L14.9 3H17L9.1 21H7Z"}
        ) 
      ]
    )
  }
}