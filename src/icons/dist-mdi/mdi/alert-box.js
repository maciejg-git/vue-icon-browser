import { h } from 'vue'
export default {
  $_icon: {
    name: "AlertBox",
    vendor: "Mdi",
    type: "",
    tags: ["alert","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alert-box"},
      [ 
        h(
          "path",
          {"d":"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z"}
        ) 
      ]
    )
  }
}