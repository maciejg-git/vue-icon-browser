import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailAlertOutline",
    vendor: "Mdi",
    type: "",
    tags: ["email","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M24 7H22V13H24V7M24 15H22V17H24V15M20 6C20 4.9 19.1 4 18 4H2C.9 4 0 4.9 0 6V18C0 19.1 .9 20 2 20H18C19.1 20 20 19.1 20 18V6M18 6L10 11L2 6H18M18 18H2V8L10 13L18 8V18Z"}
        ) 
      ]
    )
  }
}