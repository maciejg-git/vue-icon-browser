import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBoldCircleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","bold","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-bold-circle-outline"},
      [ 
        h(
          "path",
          {"d":"M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"}
        ) 
      ]
    )
  }
}