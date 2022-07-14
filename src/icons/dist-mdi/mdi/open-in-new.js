import { h } from 'vue'
export default {
  $_icon: {
    name: "OpenInNew",
    vendor: "Mdi",
    type: "",
    tags: ["open","in","new"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-open-in-new"},
      [ 
        h(
          "path",
          {"d":"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}
        ) 
      ]
    )
  }
}