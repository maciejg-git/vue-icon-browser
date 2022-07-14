import { h } from 'vue'
export default {
  $_icon: {
    name: "SignalCellular2",
    vendor: "Mdi",
    type: "",
    tags: ["signal","cellular","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-signal-cellular-2"},
      [ 
        h(
          "path",
          {"d":"M19.5,5.5V18.5H17.5V5.5H19.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z"}
        ) 
      ]
    )
  }
}