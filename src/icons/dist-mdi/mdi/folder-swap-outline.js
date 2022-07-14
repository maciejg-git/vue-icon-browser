import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderSwapOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","swap","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-swap-outline"},
      [ 
        h(
          "path",
          {"d":"M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M18 13L15 10V12H9V10L6 13L9 16V14H15V16Z"}
        ) 
      ]
    )
  }
}