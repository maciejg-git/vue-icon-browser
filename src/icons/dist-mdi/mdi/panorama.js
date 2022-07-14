import { h } from 'vue'
export default {
  $_icon: {
    name: "Panorama",
    vendor: "Mdi",
    type: "",
    tags: ["panorama"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-panorama"},
      [ 
        h(
          "path",
          {"d":"M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6A2,2 0 0,0 21,4H3A2,2 0 0,0 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18Z"}
        ) 
      ]
    )
  }
}