import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderUpload",
    vendor: "Mdi",
    type: "",
    tags: ["folder","upload"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-upload"},
      [ 
        h(
          "path",
          {"d":"M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75"}
        ) 
      ]
    )
  }
}