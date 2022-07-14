import { h } from 'vue'
export default {
  $_icon: {
    name: "NotificationClearAll",
    vendor: "Mdi",
    type: "",
    tags: ["notification","clear","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-notification-clear-all"},
      [ 
        h(
          "path",
          {"d":"M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7"}
        ) 
      ]
    )
  }
}