import { h } from 'vue'
export default {
  $_icon: {
    name: "Beer",
    vendor: "Mdi",
    type: "",
    tags: ["beer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-beer"},
      [ 
        h(
          "path",
          {"d":"M4,2H19L17,22H6L4,2M6.2,4L7.8,20H8.8L7.43,6.34C8.5,6 9.89,5.89 11,7C12.56,8.56 15.33,7.69 16.5,7.23L16.8,4H6.2Z"}
        ) 
      ]
    )
  }
}