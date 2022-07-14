import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpBoldBoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","up","bold","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-up-bold-box-outline"},
      [ 
        h(
          "path",
          {"d":"M12,7L17,12H14V16H10V12H7L12,7M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M19,19V5H5V19H19Z"}
        ) 
      ]
    )
  }
}