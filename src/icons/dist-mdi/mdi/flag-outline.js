import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagOutline",
    vendor: "Mdi",
    type: "",
    tags: ["flag","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag-outline"},
      [ 
        h(
          "path",
          {"d":"M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4"}
        ) 
      ]
    )
  }
}