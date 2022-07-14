import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusLg",
    vendor: "B",
    type: "",
    tags: ["plus","lg"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-plus-lg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}
        ) 
      ]
    )
  }
}