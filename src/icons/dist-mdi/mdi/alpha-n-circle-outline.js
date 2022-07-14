import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaNCircleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","n","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-n-circle-outline"},
      [ 
        h(
          "path",
          {"d":"M9,7H11L13,12V7H15V17H13L11,12V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"}
        ) 
      ]
    )
  }
}