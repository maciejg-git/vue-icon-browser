import { h } from 'vue'
export default {
  $_icon: {
    name: "Toggle2Off",
    vendor: "B",
    type: "",
    tags: ["toggle2","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-toggle2-off"},
      [ 
        h(
          "path",
          {"d":"M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"}
        ),
        h(
          "path",
          {"d":"M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"}
        ) 
      ]
    )
  }
}