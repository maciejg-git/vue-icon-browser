import { h } from 'vue'
export default {
  $_icon: {
    name: "TabletScreenButton",
    vendor: "Fa",
    type: "Solid",
    tags: ["tablet","screen","button"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-tablet-screen-button"},
      [ 
        h(
          "path",
          {"d":"M384 .0001H64c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 63.1 64 63.1h320c35.35 0 64-28.65 64-63.1v-384C448 28.65 419.3 .0001 384 .0001zM224 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S241.8 480 224 480zM384 384H64v-320h320V384z"}
        ) 
      ]
    )
  }
}