import { h } from 'vue'
export default {
  $_icon: {
    name: "FileMultipleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["file","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-multiple-outline"},
      [ 
        h(
          "path",
          {"d":"M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0M20 18H8V2H15V7H20V18M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4Z"}
        ) 
      ]
    )
  }
}