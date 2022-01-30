import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Fa",
    type: "Solid",
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-window-minimize","innerHTML":"<path d='M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z'/>"},
    )
  }
}