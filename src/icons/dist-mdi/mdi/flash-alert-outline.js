import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashAlertOutline",
    vendor: "Mdi",
    type: "",
    tags: ["flash","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M5,2H15L11.5,9H15L8,22V14H5V2M7,4V12H10V14.66L12,11H8.24L11.76,4M17,15H19V17H17V15M17,7H19V13H17V7Z"}
        ) 
      ]
    )
  }
}