import { h } from 'vue'
export default {
  $_icon: {
    name: "SdCard",
    vendor: "Fa",
    type: "Solid",
    tags: ["sd","card"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-sd-card","innerHTML":"<path d='M320 0H128L0 128v320c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V64C384 28.75 355.3 0 320 0zM160 160H112V64H160V160zM240 160H192V64h48V160zM320 160h-48V64H320V160z'/>"},
    )
  }
}