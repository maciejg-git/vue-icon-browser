import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageMinus",
    vendor: "Mdi",
    type: "",
    tags: ["message","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-minus"},
      [ 
        h(
          "path",
          {"d":"M20 2C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H20M8 9V11H16V9H8Z"}
        ) 
      ]
    )
  }
}