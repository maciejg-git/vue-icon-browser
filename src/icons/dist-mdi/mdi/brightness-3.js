import { h } from 'vue'
export default {
  $_icon: {
    name: "Brightness3",
    vendor: "Mdi",
    type: "",
    tags: ["brightness","3"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-brightness-3"},
      [ 
        h(
          "path",
          {"d":"M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"}
        ) 
      ]
    )
  }
}