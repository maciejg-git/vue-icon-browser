import { h } from 'vue'
export default {
  $_icon: {
    name: "CardOutline",
    vendor: "Mdi",
    type: "",
    tags: ["card","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-card-outline"},
      [ 
        h(
          "path",
          {"d":"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z"}
        ) 
      ]
    )
  }
}