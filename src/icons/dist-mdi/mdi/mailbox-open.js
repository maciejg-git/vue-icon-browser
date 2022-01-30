import { h } from 'vue'
export default {
  $_icon: {
    name: "MailboxOpen",
    vendor: "Mdi",
    type: "",
    tags: ["mailbox","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-mailbox-open","innerHTML":"<path d='M8,4A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4H8M8,6A3,3 0 0,1 11,9V18H5V9A3,3 0 0,1 8,6M14,11H20V15H18V13H14V11Z' />"},
    )
  }
}