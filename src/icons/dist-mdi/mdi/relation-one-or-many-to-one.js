import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOneOrManyToOne",
    vendor: "Mdi",
    type: "",
    tags: ["relation","one","or","many","to","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-relation-one-or-many-to-one"},
      [ 
        h(
          "path",
          {"d":"M22 15V17H19V19H17V17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H17V13H19V15Z"}
        ) 
      ]
    )
  }
}