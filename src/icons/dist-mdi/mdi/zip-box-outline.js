import { h } from 'vue'
export default {
  $_icon: {
    name: "ZipBoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["zip","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-zip-box-outline"},
      [ 
        h(
          "path",
          {"d":"M12 17V15H14V17H12M14 13V11H12V13H14M14 9V7H12V9H14M10 11H12V9H10V11M10 15H12V13H10V15M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H12V7H10V5H5V19H19V5Z"}
        ) 
      ]
    )
  }
}