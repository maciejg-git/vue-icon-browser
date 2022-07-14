import { h } from 'vue'
export default {
  $_icon: {
    name: "ValveClosed",
    vendor: "Mdi",
    type: "",
    tags: ["valve","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-valve-closed"},
      [ 
        h(
          "path",
          {"d":"M22 2V22H20V13H14.82A3 3 0 0 1 9.18 13H4V22H2V2H4V11H9.18A3 3 0 0 1 14.82 11H20V2Z"}
        ) 
      ]
    )
  }
}