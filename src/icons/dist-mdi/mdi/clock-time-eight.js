import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockTimeEight",
    vendor: "Mdi",
    type: "",
    tags: ["clock","time","eight"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clock-time-eight"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M7.7 15.5L7 14.2L11 11.9V7H12.5V12.8L7.7 15.5Z"}
        ) 
      ]
    )
  }
}