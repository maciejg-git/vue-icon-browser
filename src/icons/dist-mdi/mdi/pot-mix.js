import { h } from 'vue'
export default {
  $_icon: {
    name: "PotMix",
    vendor: "Mdi",
    type: "",
    tags: ["pot","mix"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pot-mix"},
      [ 
        h(
          "path",
          {"d":"M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M14 10H3V12H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12H21V10H14Z"}
        ) 
      ]
    )
  }
}