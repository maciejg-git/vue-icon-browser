import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaVBox",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","v","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-v-box"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,17H13L15,7H13L12,12L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}
        ) 
      ]
    )
  }
}