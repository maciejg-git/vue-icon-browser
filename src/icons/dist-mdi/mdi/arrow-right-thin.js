import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightThin",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","right","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-right-thin"},
      [ 
        h(
          "path",
          {"d":"M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z"}
        ) 
      ]
    )
  }
}