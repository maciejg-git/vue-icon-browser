import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageFastOutline",
    vendor: "Mdi",
    type: "",
    tags: ["message","fast","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-fast-outline"},
      [ 
        h(
          "path",
          {"d":"M20 5H9C7.9 5 7 5.9 7 7V21L11 17H20C21.1 17 22 16.1 22 15V7C22 5.9 21.1 5 20 5M20 15H10.2L9 16.2V7H20V15M3 7C2.4 7 2 7.4 2 8S2.4 9 3 9H5V7H3M2 11C1.4 11 1 11.4 1 12S1.4 13 2 13H5V11H2M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1Z"}
        ) 
      ]
    )
  }
}