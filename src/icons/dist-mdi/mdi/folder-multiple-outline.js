import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderMultipleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-multiple-outline"},
      [ 
        h(
          "path",
          {"d":"M22,4A2,2 0 0,1 24,6V16A2,2 0 0,1 22,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H12L14,4H22M2,6V20H20V22H2A2,2 0 0,1 0,20V11H0V6H2M6,6V16H22V6H6Z"}
        ) 
      ]
    )
  }
}