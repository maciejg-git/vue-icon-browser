import { h } from 'vue'
export default {
  $_icon: {
    name: "I",
    vendor: "Fa",
    type: "Solid",
    tags: ["i"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-i"},
      [ 
        h(
          "path",
          {"d":"M320 448c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96v-320H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h256c17.69 0 32 14.33 32 32s-14.31 32-32 32h-96v320h96C305.7 416 320 430.3 320 448z"}
        ) 
      ]
    )
  }
}