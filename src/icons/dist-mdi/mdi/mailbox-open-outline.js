import { h } from 'vue'
export default {
  $_icon: {
    name: "MailboxOpenOutline",
    vendor: "Mdi",
    type: "",
    tags: ["mailbox","open","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-mailbox-open-outline"},
      [ 
        h(
          "path",
          {"d":"M14,11H20V15H18V13H14V11M18,4H8A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4M11,18H5V9A3,3 0 0,1 8,6A3,3 0 0,1 11,9V18M21,18H13V9C13,7.92 12.65,6.86 12,6H18A3,3 0 0,1 21,9V18Z"}
        ) 
      ]
    )
  }
}