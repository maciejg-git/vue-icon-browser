import { h } from 'vue'
export default {
  $_icon: {
    name: "MovieSettingsOutline",
    vendor: "Mdi",
    type: "",
    tags: ["movie","settings","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-movie-settings-outline"},
      [ 
        h(
          "path",
          {"d":"M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V4H18M20 18H4V6.47L5.76 10H20V18M11 22H13V24H11V22M7 22H9V24H7V22M15 22H17V24H15V22Z"}
        ) 
      ]
    )
  }
}