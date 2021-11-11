import { h } from 'vue'
export default {
  name: "LightningBolt",
  vendor: "Mdi",
  type: "",
  tags: ["lightning","bolt"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-lightning-bolt","innerHTML":"<path d='M11 15H6L13 1V9H18L11 23V15Z' />"},
    )
  }
}