import { h } from 'vue'
export default {
  $_icon: {
    name: "PostLamp",
    vendor: "Mdi",
    type: "",
    tags: ["post","lamp"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-post-lamp"},
      [ 
        h(
          "path",
          {"d":"M14 3L13 1H11L10 3L5 6H7L8 14L10 16L10.5 17H9V23H15V17H13.5L14 16L16 14L17 6H19L14 3M14.16 13H9.84L9 6H15L14.16 13Z"}
        ) 
      ]
    )
  }
}