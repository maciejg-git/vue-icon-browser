import { h } from 'vue'
export default {
  $_icon: {
    name: "MortarPestlePlus",
    vendor: "Mdi",
    type: "",
    tags: ["mortar","pestle","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-mortar-pestle-plus"},
      [ 
        h(
          "path",
          {"d":"M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z"}
        ) 
      ]
    )
  }
}