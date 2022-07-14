import { h } from 'vue'
export default {
  $_icon: {
    name: "TableChair",
    vendor: "Mdi",
    type: "",
    tags: ["table","chair"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table-chair"},
      [ 
        h(
          "path",
          {"d":"M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z"}
        ) 
      ]
    )
  }
}