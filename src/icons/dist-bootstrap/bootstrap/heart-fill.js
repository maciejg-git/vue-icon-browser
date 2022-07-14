import { h } from 'vue'
export default {
  $_icon: {
    name: "HeartFill",
    vendor: "B",
    type: "",
    tags: ["heart","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-heart-fill"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}
        ) 
      ]
    )
  }
}