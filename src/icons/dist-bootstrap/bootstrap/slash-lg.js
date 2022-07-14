import { h } from 'vue'
export default {
  $_icon: {
    name: "SlashLg",
    vendor: "B",
    type: "",
    tags: ["slash","lg"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-slash-lg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}
        ) 
      ]
    )
  }
}