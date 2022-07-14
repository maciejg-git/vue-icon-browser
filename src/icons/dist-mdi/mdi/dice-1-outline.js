import { h } from 'vue'
export default {
  $_icon: {
    name: "Dice1Outline",
    vendor: "Mdi",
    type: "",
    tags: ["dice","1","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-dice-1-outline"},
      [ 
        h(
          "path",
          {"d":"M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 10.5C11.17 10.5 10.5 11.17 10.5 12S11.17 13.5 12 13.5 13.5 12.83 13.5 12 12.83 10.5 12 10.5"}
        ) 
      ]
    )
  }
}