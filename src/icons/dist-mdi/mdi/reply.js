import { h } from 'vue'
export default {
  $_icon: {
    name: "Reply",
    vendor: "Mdi",
    type: "",
    tags: ["reply"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-reply"},
      [ 
        h(
          "path",
          {"d":"M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"}
        ) 
      ]
    )
  }
}