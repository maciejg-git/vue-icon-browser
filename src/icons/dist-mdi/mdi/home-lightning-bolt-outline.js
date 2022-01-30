import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeLightningBoltOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","lightning","bolt","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-lightning-bolt-outline","innerHTML":"<path d='M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M11.5 14H9L12.5 7V11H15L11.5 18V14Z' />"},
    )
  }
}