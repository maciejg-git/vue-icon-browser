import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuDownOutline",
    vendor: "Mdi",
    type: "",
    tags: ["menu","down","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-menu-down-outline"},
      [ 
        h(
          "path",
          {"d":"M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z"}
        ) 
      ]
    )
  }
}