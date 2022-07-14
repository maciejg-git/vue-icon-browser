import { h } from 'vue'
export default {
  $_icon: {
    name: "Cash",
    vendor: "B",
    type: "",
    tags: ["cash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-cash"},
      [ 
        h(
          "path",
          {"d":"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}
        ),
        h(
          "path",
          {"d":"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"}
        ) 
      ]
    )
  }
}