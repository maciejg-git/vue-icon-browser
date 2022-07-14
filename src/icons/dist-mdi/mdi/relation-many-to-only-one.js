import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationManyToOnlyOne",
    vendor: "Mdi",
    type: "",
    tags: ["relation","many","to","only","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-relation-many-to-only-one"},
      [ 
        h(
          "path",
          {"d":"M22 15V17H21V19H19V17H18V19H16V17H11V9H5L3 11H2V5H3L5 7H13V15H16V13H18V15H19V13H21V15Z"}
        ) 
      ]
    )
  }
}