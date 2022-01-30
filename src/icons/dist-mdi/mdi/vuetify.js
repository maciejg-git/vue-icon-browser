import { h } from 'vue'
export default {
  $_icon: {
    name: "Vuetify",
    vendor: "Mdi",
    type: "",
    tags: ["vuetify"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-vuetify","innerHTML":"<path d='M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z' />"},
    )
  }
}