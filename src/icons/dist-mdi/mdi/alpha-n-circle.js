import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaNCircle",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","n","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-n-circle"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V12L13,17H15V7H13V12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}
        ) 
      ]
    )
  }
}