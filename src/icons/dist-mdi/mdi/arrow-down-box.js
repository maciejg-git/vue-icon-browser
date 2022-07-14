import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBox",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-box"},
      [ 
        h(
          "path",
          {"d":"M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M11,6V14.5L7.5,11L6.08,12.42L12,18.34L17.92,12.42L16.5,11L13,14.5V6H11Z"}
        ) 
      ]
    )
  }
}