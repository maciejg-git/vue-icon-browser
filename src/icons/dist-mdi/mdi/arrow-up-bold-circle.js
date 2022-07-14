import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpBoldCircle",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","up","bold","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-up-bold-circle"},
      [ 
        h(
          "path",
          {"d":"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z"}
        ) 
      ]
    )
  }
}