import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTextRotationDown",
    vendor: "Mdi",
    type: "",
    tags: ["format","text","rotation","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-text-rotation-down"},
      [ 
        h(
          "path",
          {"d":"M6,19.73L3,16.73H5V4.27H7V16.73H9L6,19.73M14,9.38V13.13L19.03,11.25L14,9.38M21,12L10,16.73V14.67L12.19,13.73V8.77L10,7.83V5.77L21,10.5V12Z"}
        ) 
      ]
    )
  }
}