import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaVCircleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","v","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-v-circle-outline"},
      [ 
        h(
          "path",
          {"d":"M9,7H11L12,12L13,7H15L13,17H11L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"}
        ) 
      ]
    )
  }
}