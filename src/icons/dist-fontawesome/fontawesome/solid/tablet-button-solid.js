import { h } from 'vue'
export default {
  $_icon: {
    name: "TabletButton",
    vendor: "Fa",
    type: "Solid",
    tags: ["tablet","button"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-tablet-button","innerHTML":"<path d='M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM224 464c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S241.8 464 224 464z'/>"},
    )
  }
}