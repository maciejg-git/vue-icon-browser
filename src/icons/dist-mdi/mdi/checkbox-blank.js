import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckboxBlank",
    vendor: "Mdi",
    type: "",
    tags: ["checkbox","blank"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-checkbox-blank"},
      [ 
        h(
          "path",
          {"d":"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
        ) 
      ]
    )
  }
}