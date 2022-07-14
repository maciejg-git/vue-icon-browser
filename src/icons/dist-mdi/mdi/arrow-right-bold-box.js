import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightBoldBox",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","right","bold","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-right-bold-box"},
      [ 
        h(
          "path",
          {"d":"M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z"}
        ) 
      ]
    )
  }
}