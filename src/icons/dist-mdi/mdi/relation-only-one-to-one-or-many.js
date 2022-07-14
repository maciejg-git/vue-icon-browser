import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOnlyOneToOneOrMany",
    vendor: "Mdi",
    type: "",
    tags: ["relation","only","one","to","one","or","many"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-relation-only-one-to-one-or-many"},
      [ 
        h(
          "path",
          {"d":"M22 13V19H21L19 17V19H17V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H17V13H19V15L21 13Z"}
        ) 
      ]
    )
  }
}