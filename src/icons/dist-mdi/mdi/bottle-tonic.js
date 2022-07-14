import { h } from 'vue'
export default {
  $_icon: {
    name: "BottleTonic",
    vendor: "Mdi",
    type: "",
    tags: ["bottle","tonic"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bottle-tonic"},
      [ 
        h(
          "path",
          {"d":"M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13Z"}
        ) 
      ]
    )
  }
}