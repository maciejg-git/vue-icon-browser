import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailReceiveOutline",
    vendor: "Mdi",
    type: "",
    tags: ["email","receive","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-receive-outline"},
      [ 
        h(
          "path",
          {"d":"M22 20H18V23L13 18.5L18 14V17H22V20M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V15H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z"}
        ) 
      ]
    )
  }
}