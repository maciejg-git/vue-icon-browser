import { h } from 'vue'
export default {
  $_icon: {
    name: "Flipboard",
    vendor: "Fa",
    type: "Brand",
    tags: ["flipboard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-flipboard","innerHTML":"<path d='M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z'/>"},
    )
  }
}