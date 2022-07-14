import { h } from 'vue'
export default {
  $_icon: {
    name: "CoachLamp",
    vendor: "Mdi",
    type: "",
    tags: ["coach","lamp"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-coach-lamp"},
      [ 
        h(
          "path",
          {"d":"M16 5L15 2H13L12 5L6 8H8L8.6 11H4V7H2V17H4V13H9L10 18L12 20L13 22H15L16 20L18 18L20 8H22M16.16 17H11.84L10 8H18Z"}
        ) 
      ]
    )
  }
}