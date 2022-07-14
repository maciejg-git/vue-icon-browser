import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeFloorB",
    vendor: "Mdi",
    type: "",
    tags: ["home","floor","b"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-floor-b"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22L12,3M9,8H13A2,2 0 0,1 15,10V11.5A1.5,1.5 0 0,1 13.5,13A1.5,1.5 0 0,1 15,14.5V16A2,2 0 0,1 13,18H9V8M11,10V12H13V10H11M11,14V16H13V14H11Z"}
        ) 
      ]
    )
  }
}