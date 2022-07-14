import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareCircle",
    vendor: "Mdi",
    type: "",
    tags: ["square","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-square-circle"},
      [ 
        h(
          "path",
          {"d":"M20 4V20H4V4H20M22 2H2V22H22V2M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6Z"}
        ) 
      ]
    )
  }
}