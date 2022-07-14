import { h } from 'vue'
export default {
  $_icon: {
    name: "Pin",
    vendor: "Mdi",
    type: "",
    tags: ["pin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pin"},
      [ 
        h(
          "path",
          {"d":"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"}
        ) 
      ]
    )
  }
}