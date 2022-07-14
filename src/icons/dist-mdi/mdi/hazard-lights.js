import { h } from 'vue'
export default {
  $_icon: {
    name: "HazardLights",
    vendor: "Mdi",
    type: "",
    tags: ["hazard","lights"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-hazard-lights"},
      [ 
        h(
          "path",
          {"d":"M12,12L14.33,16H9.68L12,12M12,8L6.21,18H17.8L12,8M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z"}
        ) 
      ]
    )
  }
}