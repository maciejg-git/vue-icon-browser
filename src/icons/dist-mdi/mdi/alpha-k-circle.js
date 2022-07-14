import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaKCircle",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","k","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-k-circle"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z"}
        ) 
      ]
    )
  }
}