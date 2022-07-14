import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeFloorG",
    vendor: "Mdi",
    type: "",
    tags: ["home","floor","g"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-floor-g"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22L12,3M11,8H15V10H11V16H13V12H15V16C15,17.11 14.1,18 13,18H11A2,2 0 0,1 9,16V10C9,8.89 9.9,8 11,8Z"}
        ) 
      ]
    )
  }
}