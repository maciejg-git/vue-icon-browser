import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric4Circle",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","4","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-4-circle"},
      [ 
        h(
          "path",
          {"d":"M9,7V13H13V17H15V7H13V11H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}
        ) 
      ]
    )
  }
}