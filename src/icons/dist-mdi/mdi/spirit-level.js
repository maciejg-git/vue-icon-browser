import { h } from 'vue'
export default {
  $_icon: {
    name: "SpiritLevel",
    vendor: "Mdi",
    type: "",
    tags: ["spirit","level"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-spirit-level"},
      [ 
        h(
          "path",
          {"d":"M22 8H2V16H22V8M18 14V10H20V14H18M11 12H13C14.1 12 15 11.11 15 10H17V14H7V10H9C9 11.11 9.9 12 11 12M4 14V10H6V14H4Z"}
        ) 
      ]
    )
  }
}