import { h } from 'vue'
export default {
  $_icon: {
    name: "Delete",
    vendor: "Mdi",
    type: "",
    tags: ["delete"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-delete"},
      [ 
        h(
          "path",
          {"d":"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        ) 
      ]
    )
  }
}