import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerSandPaused",
    vendor: "Mdi",
    type: "",
    tags: ["timer","sand","paused"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-timer-sand-paused","innerHTML":"<path d='M22 6V18H16L12 14L8 18H2V6H8L12 10L16 6M7.5 16L11.5 12L7.5 8H4V16M12.5 12L16.5 16H20V8H16.5M18 12V14H17.2L15.2 12M8.8 12L6.8 14H6V12Z' />"},
    )
  }
}