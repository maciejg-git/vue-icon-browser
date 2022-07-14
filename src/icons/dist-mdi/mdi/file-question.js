import { h } from 'vue'
export default {
  $_icon: {
    name: "FileQuestion",
    vendor: "Mdi",
    type: "",
    tags: ["file","question"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-question"},
      [ 
        h(
          "path",
          {"d":"M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11A3,3 0 0,1 15,14C15,15.88 12.75,16.06 12.75,17.75H11.25C11.25,15.31 13.5,15.5 13.5,14A1.5,1.5 0 0,0 12,12.5A1.5,1.5 0 0,0 10.5,14H9A3,3 0 0,1 12,11M11.25,18.5H12.75V20H11.25V18.5Z"}
        ) 
      ]
    )
  }
}