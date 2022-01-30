import { h } from 'vue'
export default {
  $_icon: {
    name: "FilePerson",
    vendor: "B",
    type: "",
    tags: ["file","person"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-file-person","innerHTML":"  <path d='M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z'/>  <path d='M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/>"},
    )
  }
}