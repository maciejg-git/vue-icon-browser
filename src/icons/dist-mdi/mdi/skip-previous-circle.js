import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipPreviousCircle",
    vendor: "Mdi",
    type: "",
    tags: ["skip","previous","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skip-previous-circle"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8H10V16H8M16,8V16L11,12"}
        ) 
      ]
    )
  }
}