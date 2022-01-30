import { h } from 'vue'
export default {
  $_icon: {
    name: "LightbulbSpot",
    vendor: "Mdi",
    type: "",
    tags: ["lightbulb","spot"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-lightbulb-spot","innerHTML":"<path d='M9 19H11V22H9L9 19M13 22H15V19H13V22M2 2V4H22V2H2M9 14L9 17H15V14C17.5 12.57 20 11 20 6H4C4 11 6.5 12.57 9 14Z' />"},
    )
  }
}