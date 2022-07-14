import { h } from 'vue'
export default {
  $_icon: {
    name: "Bookshelf",
    vendor: "Mdi",
    type: "",
    tags: ["bookshelf"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bookshelf"},
      [ 
        h(
          "path",
          {"d":"M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"}
        ) 
      ]
    )
  }
}