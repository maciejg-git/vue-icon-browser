import { h } from 'vue'
export default {
  $_icon: {
    name: "TableColumns",
    vendor: "Fa",
    type: "Solid",
    tags: ["table","columns"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-table-columns","innerHTML":"<path d='M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM64 416H224V160H64V416zM448 160H288V416H448V160z'/>"},
    )
  }
}