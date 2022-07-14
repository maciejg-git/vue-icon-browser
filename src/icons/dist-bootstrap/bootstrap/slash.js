import { h } from 'vue'
export default {
  $_icon: {
    name: "Slash",
    vendor: "B",
    type: "",
    tags: ["slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-slash"},
      [ 
        h(
          "path",
          {"d":"M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"}
        ) 
      ]
    )
  }
}