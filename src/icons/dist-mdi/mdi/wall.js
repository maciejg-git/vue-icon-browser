import { h } from 'vue'
export default {
  $_icon: {
    name: "Wall",
    vendor: "Mdi",
    type: "",
    tags: ["wall"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-wall"},
      [ 
        h(
          "path",
          {"d":"M3,16H12V21H3V16M2,10H8V15H2V10M9,10H15V15H9V10M16,10H22V15H16V10M13,16H21V21H13V16M3,4H11V9H3V4M12,4H21V9H12V4Z"}
        ) 
      ]
    )
  }
}