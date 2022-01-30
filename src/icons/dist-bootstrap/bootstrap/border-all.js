import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderAll",
    vendor: "B",
    type: "",
    tags: ["border","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-border-all","innerHTML":"  <path d='M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z'/>"},
    )
  }
}