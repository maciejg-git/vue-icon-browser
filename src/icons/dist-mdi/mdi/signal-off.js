import { h } from 'vue'
export default {
  $_icon: {
    name: "SignalOff",
    vendor: "Mdi",
    type: "",
    tags: ["signal","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-signal-off"},
      [ 
        h(
          "path",
          {"d":"M18,3V16.18L21,19.18V3H18M4.28,5L3,6.27L10.73,14H8V21H11V14.27L13,16.27V21H16V19.27L19.73,23L21,21.72L4.28,5M13,9V11.18L16,14.18V9H13M3,18V21H6V18H3Z"}
        ) 
      ]
    )
  }
}