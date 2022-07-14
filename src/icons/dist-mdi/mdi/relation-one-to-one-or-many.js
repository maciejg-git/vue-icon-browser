import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOneToOneOrMany",
    vendor: "Mdi",
    type: "",
    tags: ["relation","one","to","one","or","many"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-relation-one-to-one-or-many"},
      [ 
        h(
          "path",
          {"d":"M22 13V19H21L19 17V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15L21 13Z"}
        ) 
      ]
    )
  }
}