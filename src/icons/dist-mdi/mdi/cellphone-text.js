import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneText",
    vendor: "Mdi",
    type: "",
    tags: ["cellphone","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cellphone-text"},
      [ 
        h(
          "path",
          {"d":"M17,19V5H7V19H17M17,1A2,2 0 0,1 19,3V21A2,2 0 0,1 17,23H7C5.89,23 5,22.1 5,21V3C5,1.89 5.89,1 7,1H17M9,7H15V9H9V7M9,11H13V13H9V11Z"}
        ) 
      ]
    )
  }
}