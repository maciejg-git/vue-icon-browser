import { h } from 'vue'
export default {
  $_icon: {
    name: "SawtoothWave",
    vendor: "Mdi",
    type: "",
    tags: ["sawtooth","wave"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sawtooth-wave"},
      [ 
        h(
          "path",
          {"d":"M11 22V6.83L2 16V13.17L13 2V17.17L22 8V10.83L11 22Z"}
        ) 
      ]
    )
  }
}