import { h } from 'vue'
export default {
  $_icon: {
    name: "PageLayoutFooter",
    vendor: "Mdi",
    type: "",
    tags: ["page","layout","footer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-page-layout-footer"},
      [ 
        h(
          "path",
          {"d":"M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,16V20H18V16H6Z"}
        ) 
      ]
    )
  }
}