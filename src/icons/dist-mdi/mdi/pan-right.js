import { h } from 'vue'
export default {
  $_icon: {
    name: "PanRight",
    vendor: "Mdi",
    type: "",
    tags: ["pan","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pan-right"},
      [ 
        h(
          "path",
          {"d":"M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"}
        ) 
      ]
    )
  }
}