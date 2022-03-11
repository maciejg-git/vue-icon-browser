import { h } from 'vue'
export default {
  $_icon: {
    name: "MobileButton",
    vendor: "Fa",
    type: "Solid",
    tags: ["mobile","button"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-mobile-button","innerHTML":"<path d='M320 0H64C37.49 0 16 21.49 16 48v416C16 490.5 37.49 512 64 512h256c26.51 0 48-21.49 48-48v-416C368 21.49 346.5 0 320 0zM192 464c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 464 192 464z'/>"},
    )
  }
}