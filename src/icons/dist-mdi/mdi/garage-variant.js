import { h } from 'vue'
export default {
  $_icon: {
    name: "GarageVariant",
    vendor: "Mdi",
    type: "",
    tags: ["garage","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-garage-variant","innerHTML":"<path d='M22 9V20H20V11H4V20H2V9L12 5L22 9M19 12H5V14H19V12M19 18H5V20H19V18M19 15H5V17H19V15Z' />"},
    )
  }
}