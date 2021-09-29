import { h } from 'vue'
export default {
  name: "CallReceived",
  vendor: "Mdi",
  tags: ["call","received"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-call-received","innerHTML":"<path d='M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41' />"},
    )
  }
}