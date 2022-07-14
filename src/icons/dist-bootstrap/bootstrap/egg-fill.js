import { h } from 'vue'
export default {
  $_icon: {
    name: "EggFill",
    vendor: "B",
    type: "",
    tags: ["egg","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-egg-fill"},
      [ 
        h(
          "path",
          {"d":"M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"}
        ) 
      ]
    )
  }
}