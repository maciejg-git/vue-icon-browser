import { h } from 'vue'
export default {
  $_icon: {
    name: "NoteAlertOutline",
    vendor: "Mdi",
    type: "",
    tags: ["note","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-note-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M3 3C1.89 3 1 3.89 1 5V19C1 20.1 1.89 21 3 21H17C18.11 21 19 20.11 19 19V9L13 3H3M17 19H3V5H10V12H17V19M12 10V4.5L17.5 10H12M23 7V13H21V7H23M21 15H23V17H21V15Z"}
        ) 
      ]
    )
  }
}