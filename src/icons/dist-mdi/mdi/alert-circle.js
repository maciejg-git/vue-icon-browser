import { h } from 'vue'
export default {
  $_icon: {
    name: "AlertCircle",
    vendor: "Mdi",
    type: "",
    tags: ["alert","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alert-circle"},
      [ 
        h(
          "path",
          {"d":"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}
        ) 
      ]
    )
  }
}