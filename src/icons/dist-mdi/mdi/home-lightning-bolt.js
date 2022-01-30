import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeLightningBolt",
    vendor: "Mdi",
    type: "",
    tags: ["home","lightning","bolt"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-lightning-bolt","innerHTML":"<path d='M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z' />"},
    )
  }
}