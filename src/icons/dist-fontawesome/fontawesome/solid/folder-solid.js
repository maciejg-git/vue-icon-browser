import { h } from 'vue'
export default {
  $_icon: {
    name: "Folder",
    vendor: "Fa",
    type: "Solid",
    tags: ["folder"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-folder"},
      [ 
        h(
          "path",
          {"d":"M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"}
        ) 
      ]
    )
  }
}