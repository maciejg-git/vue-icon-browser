import { h } from 'vue'
export default {
  $_icon: {
    name: "Calendar3Fill",
    vendor: "B",
    type: "",
    tags: ["calendar3","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-calendar3-fill"},
      [ 
        h(
          "path",
          {"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z"}
        ) 
      ]
    )
  }
}