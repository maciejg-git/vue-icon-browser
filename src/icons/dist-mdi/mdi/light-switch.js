import { h } from 'vue'
export default {
  $_icon: {
    name: "LightSwitch",
    vendor: "Mdi",
    type: "",
    tags: ["light","switch"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-light-switch","innerHTML":"<path d='M7,1A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M7,3H17V21H7V3M9,6V18H15V6H9M10,7H14V11H10V7M10,13H14V17H10V13Z' />"},
    )
  }
}